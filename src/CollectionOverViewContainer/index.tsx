import React, { useState, useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { values } from "mobx";

export const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
    }
  }
`;
export const GET_COLLECTION_BY_ID = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
export const GET_USERS = gql`
  query {
    users {
      id
    }
  }
`;
export const INSERT_USER = gql`
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

function CollectionOverViewContainer() {
  const [addTodo, { loading, error, data }] = useMutation(GET_USERS);
  
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: values });
        }}
      >
        <input type="text" name="name" />
        <input type="text" name="rocket" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default CollectionOverViewContainer;
