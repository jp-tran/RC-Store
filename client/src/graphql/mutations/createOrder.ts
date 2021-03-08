import { gql } from '@apollo/client';

export default gql`
  mutation CreateOrder($newOrder: NewOrder!) {
    createOrder(newOrder: $newOrder) {
      id
      userID
      grandTotal
      date
    }
  }
`;
