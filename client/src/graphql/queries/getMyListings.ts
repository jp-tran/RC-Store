import { gql } from '@apollo/client';

export default gql`
  query Listings($sellerID: Float) {
    listings(sellerID: $sellerID) {
      sku
      name
      price
      currency
      image
      description
      remainingQuantity
      condition
      location
      sellerName
      sellerPhoto
      datePosted
    }
  }
`;
