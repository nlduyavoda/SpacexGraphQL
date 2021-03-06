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
  mutation insert_users($name: String, $rocket: String) {
    insert_users(objects: [{ name: $name, rocket: $rocket }]) {
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
const GET_LAUNCHES = gql`
  query getLaunches($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      details
      links {
        flickr_images
      }
    }
  }
`;
export { getBooks, getSingleBook, getCollections, INSERT_USER, GET_LAUNCHES };
