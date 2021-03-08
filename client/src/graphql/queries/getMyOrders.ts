import { gql } from '@apollo/client';

export default gql`
  query Orders($userID: Float!) {
    orders(userID: $userID) {
      id
      grandTotal
      date
      purchasedProducts {
        sku
        name
        price
        currency
        size
        quantity
        image
      }
    }
  }
`;
