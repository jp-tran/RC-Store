import { gql } from '@apollo/client';

export default gql`
  query Products($query: String) {
    products(query: $query) {
      sku
      name
      price
      currency
      image
      description
      longDescription
      size
      remainingQuantity
    }
  }
`;
