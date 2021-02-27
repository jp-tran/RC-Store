import { gql } from '@apollo/client';

export default gql`
  query Products($isRecurseCenterMerch: Boolean) {
    products(isRecurseCenterMerch: $isRecurseCenterMerch) {
      sku
      name
      price
      currency
      image
      description
      longDescription
    }
  }
`;
