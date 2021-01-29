import * as React from 'react';

import Product, { ProductProps } from './Product';

export interface ProductCatalogProps {
  productList: ProductProps[];
}

const ProductCatalog: React.FunctionComponent<ProductCatalogProps> = (
  props
) => {
  const { productList } = props;
  return (
    <div>
      {productList.map((productProps) => {
        const { productName, imageSrc, description } = productProps;

        return (
          <Product
            productName={productName}
            imageSrc={imageSrc}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default ProductCatalog;
