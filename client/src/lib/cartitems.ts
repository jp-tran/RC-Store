
import { ICartItem } from '../components/shoppingCart/CartItem';

// export interface ProductPath {
//   params: { id: string };
// }

// TODO: Placeholder code. Data should be fetched from a DB.
const getCartItems = (): ICartItem[] => [
  {
    productId: '0',
    productName: 'RC t-shirt',
    imageSrc: '/t_shirt.webp',
    description: "A great product you'd like to buy for sure.",
  price: '20',
  quantity: 2,
  },
  {
    productId: '1',
    productName: 'RC beanie',
    imageSrc: '/beanie.webp',
    description: 'An expensive product.',
    price: '10',
    quantity: 2,
  },
  {
    productId: '2',
    productName: 'RC mug',
    imageSrc: '/mug.webp',
    description: 'A product of great quality.',
    price: '7',
    quantity: 1,
  },
];

// export const getAllProductPaths = () => {
//   const products: ProductProps[] = getProducts();
//   const productPaths: ProductPath[] = products.map((product) => ({
//     params: {
//       id: product.productId,
//     },
//   }));

//   return productPaths;
// };

// export const getProductData = (id: string): ProductProps => {
//   const products = getProducts();
//   return products.filter((product) => product.productId == id)[0];
// };

export default getCartItems;
