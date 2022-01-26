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
export { getBooks, getSingleBook, getCollections };
