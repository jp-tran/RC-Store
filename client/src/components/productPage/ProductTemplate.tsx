import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

export interface ProductTemplateProps {}

const ProductTemplate: React.FunctionComponent<ProductTemplateProps> = () => {
  return (
    <div>
      <ProductImage />
      <ProductInfo />
    </div>
  );
};

export default ProductTemplate;
