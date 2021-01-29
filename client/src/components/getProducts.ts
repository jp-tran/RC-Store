import { ProductProps } from './Product';
const getProducts = (): ProductProps[] => [
  {
    productName: 'A product',
    imageSrc: '/dummy_product.jpeg',
    description: "A great product you'd like to buy for sure.",
  },
  {
    productName: 'A 2nd product',
    imageSrc: '/dummy_product.jpeg',
    description: 'A expensive product.',
  },
  {
    productName: 'A third product',
    imageSrc: '/dummy_product.jpeg',
    description: 'A product of great quality.',
  },
];

const productList = getProducts();

export default productList;
