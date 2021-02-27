import { NextApiRequest, NextApiResponse } from 'next';

/*
 * Product data can be loaded from anywhere. In this case, we’re loading it from
 * a local JSON file, but this could also come from an async call to your
 * inventory management service, a database query, or some other API call.
 *
 * The important thing is that the product info is loaded from somewhere trusted
 * so you know the pricing information is accurate.
 */
import { validateCartItems } from 'use-shopping-cart/src/serverUtil';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      // Fetch inventory
      fetch(process.env.NEXT_PUBLIC_API_URL as string, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `
          query {
            products {
              sku
              name
              price
              currency
              image
            }
          }
        `,
        }),
      })
        .then((r) => r.json())
        .then(async (a) => {
          let inventory = a.data.products;

          // Validate the cart details that were sent from the client.
          const cartItems = req.body;
          const line_items = validateCartItems(inventory, cartItems);

          // Create Checkout Sessions from body params.
          const params: Stripe.Checkout.SessionCreateParams = {
            mode: 'payment',
            submit_type: 'pay',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_address_collection: {
              allowed_countries: ['US', 'CA'],
            },
            line_items,
            success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/shoppingcart`,
          };
          const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
            params
          );

          res.status(200).json(checkoutSession);
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            message: 'Server could not fetch inventory.',
          });
        });
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
