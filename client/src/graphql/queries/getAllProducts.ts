import { gql } from '@apollo/client';

export default gql`
  query {
    products {
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
