import { gql } from '@apollo/client';

export default gql`
  query Products($sellerID: Float) {
    products(sellerID: $sellerID) {
      sku
      name
      price
      currency
      image
      description
      longDescription
      remainingQuantity
      condition
      location
      datePosted
    }
  }
`;
