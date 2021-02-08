import { ProductProps } from '../components/productCatalog/Product';

export interface ProductPath {
  params: { id: string };
}

const getProducts = (): ProductProps[] => [
  {
    productId: '0',
    productName: 'RC t-shirt',
    imageSrc: '/t_shirt.webp',
    description: "A great product you'd like to buy for sure.",
  },
  {
    productId: '1',
    productName: 'RC beanie',
    imageSrc: '/beanie.webp',
    description: 'An expensive product.',
  },
  {
    productId: '2',
    productName: 'RC mug',
    imageSrc: '/mug.webp',
    description: 'A product of great quality.',
  },
];

export const getAllProductPaths = () => {
  const products: ProductProps[] = getProducts();
  const productPaths: ProductPath[] = products.map((product) => ({
    params: {
      id: product.productId,
    },
  }));

  return productPaths;
};

export const getProductData = (id: string): ProductProps => {
  const products = getProducts();
  return products.filter((product) => product.productId == id)[0];
};

export default getProducts;
