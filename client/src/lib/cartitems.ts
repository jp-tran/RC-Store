
import { ICartItem } from '../components/shoppingCart/CartItem';

// export interface ProductPath {
//   params: { id: string };
// }

// TODO: Placeholder code. Data should be fetched from a DB.
const getCartItems = (): ICartItem[] => [
  {
    productId: '0',
    productName: 'A product',
    imageSrc: '/product_img.webp',
    description: "A great product you'd like to buy for sure.",
    price: 20,
    quantity: 1,
  },
  {
    productId: '1',
    productName: 'A 2nd product',
    imageSrc: '/dummy_product.jpeg',
    description: 'An expensive product.',
    price: 30,
    quantity: 1,
  },
  {
    productId: '2',
    productName: 'A third product',
    imageSrc: '/dummy_product.jpeg',
    description: 'A product of great quality.',
    price: 15,
    quantity: 3,
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
