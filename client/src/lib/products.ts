import { ProductProps } from '../types';
import products from './products.json';

export interface ProductPath {
  params: { id: string };
}

/* const getProducts = (): ProductCardProps[] => [
  {
    productId: '0',
    productName: 'RC t-shirt',
    price: '18.45',
    imageSrc: '/t_shirt.webp',
    description: "A great product you'd like to buy for sure.",
    longDescription: `We usually give t-shirts out at the end of each batch. Since we haven't been able to meet in person since March, we weren't able to do that... until now!

• Please only order a shirt if you finished a batch of RC in 2020 and didn’t get a T-shirt.
• One T-shirt per Recurser, please — choose either fitted or straight cut.

These shirts are straight cut: These shirts are straight-cut: the sleeves and waist are longer and looser than the fitted-cut version. This style is also referred to as a men’s cut or unisex cut shirt.

More details:

• 100% combed and ring-spun cotton (Heather colors contain polyester)
• Fabric weight: 4.2 oz (142 g/m2)
• Pre-shrunk

Note: due to supplier stock, not all color/size combos are available:

• XS only available in Heather Midnight Navy and Dark Grey Heather
• 2XL not available in Red
• 3XL and 4XL not available in Autumn`,
  },
  {
    productId: '1',
    productName: 'RC beanie',
    price: '13.75',
    imageSrc: '/beanie.webp',
    description: 'An expensive product.',
    longDescription: `A knit beanie with a little RC logo embroidered on the front!

• 100% Turbo Acrylic
• 12" in length
• Hypoallergenic
• One size fits most
    
Note: Batch t-shirts are free, but our extra merch items are priced at our cost, as we unfortunately can’t afford to offer them for free.`,
  },
  {
    productId: '2',
    productName: 'RC mug',
    price: '7.95',
    imageSrc: '/mug.webp',
    description: 'A product of great quality.',
    longDescription: `Whether you're drinking your morning coffee, evening tea, or something in between – this mug's for you! Available in 11 oz and 15 oz sizes.

• Ceramic
• Dishwasher and microwave safe
• Glossy finish
    
Note: Batch t-shirts are free, but our extra merch items are priced at our cost, as we unfortunately can’t afford to offer them for free.`,
  },
]; */

export const getAllProductPaths = () => {
  // const products: ProductCardProps[] = getProducts();
  const productPaths: ProductPath[] = products.map((product) => ({
    params: {
      id: product.sku,
    },
  }));

  return productPaths;
};

export const getProductData = (id: string): ProductProps => {
  // const products = getProducts();
  return products.filter((product) => product.sku == id)[0];
};
