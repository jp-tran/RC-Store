import { ProductProps } from '../components/Product';

const getProducts = (): ProductProps[] => [
  {
    productId: '0',
    productName: 'A product',
    imageSrc: '/dummy_product.jpeg',
    description: "A great product you'd like to buy for sure.",
  },
  {
    productId: '1',
    productName: 'A 2nd product',
    imageSrc: '/dummy_product.jpeg',
    description: 'An expensive product.',
  },
  {
    productId: '2',
    productName: 'A third product',
    imageSrc: '/dummy_product.jpeg',
    description: 'A product of great quality.',
  },
];

export default getProducts;
