import { ProductProps } from '../types';

/**
 * @returns - array of available sizes for a product
 * @param defaultSizes - array of possible sizes for a product
 * @param product - array of variations of the same product (each variation has a different size)
 */
const availableProductSizes = (
  defaultSizes: string[],
  product: ProductProps[]
) => {
  return defaultSizes.filter((size) => {
    if (product.some((variation) => variation.size === size)) {
      return true;
    }
    return false;
  });
};

export default availableProductSizes;
