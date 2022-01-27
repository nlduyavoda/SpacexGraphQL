import { gql } from "@apollo/client";

const getBooks = gql`
  query GetBooksQuery {
    books {
      name
      id
    }
  }
`;
const getSingleBook = gql`
  query getSingleBookQuery($id: ID!) {
    book(id: $id) {
      id
      name
      author {
        id
        name
        books {
          name
        }
      }
    }
  }
`;
const getCollections = gql`
  query {
    collections {
      id
      title
      item {
        id
        name
      }
    }
  }
`;
 const INSERT_USER = gql`
    mutation insert_users({
      $name:String!,
      $rocket:String!
    }){
      insert_users(objects: [{
        $name:String!,
        $rocket:String!
      }]) {
        returning {
          id
          name
          rocket
          timestamp
          twitter
        }
      }
    }
  `;
export { getBooks, getSingleBook, getCollections };
