import * as React from 'react';

import Product from './Product';

export interface ProductCatalogProps {}

const ProductCatalog: React.FunctionComponent<ProductCatalogProps> = () => {
  return (
    <div>
      <Product
        productName='A product'
        description="A great product you'd like to buy for sure."
        imageSrc='/dummy_product.jpeg'
      />
    </div>
  );
};

export default ProductCatalog;
