import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import "./index.scss";
type PropsType = {
  userId: string;
};
const USER_BY_ID = gql`
  query users_by_pk($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      rocket
    }
  }
`;
const UPDATE_USER = gql`
  query users_by_pk($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      rocket
    }
  }
`;
export default function UpdateForm<PropsType>({ userId }) {
  const { data } = useQuery(USER_BY_ID, {
    variables: {
      id: userId,
    },
  });
  const [state, setState] = useState(data?.users_by_pk);
  useEffect(() => {
    setState(data?.users_by_pk);
  }, [data?.users_by_pk]);
  console.log(state);
  return (
    <div className="update-form">
      {state ? (
        <>
          <form>
            <label>ID: </label>
            <input defaultValue={state.id} />
            <label>NAME: </label>
            <input defaultValue={state.name} />
            <label>ROCKET: </label>
            <input defaultValue={state.rocket} />
            <button type="submit">UPDATE</button>
          </form>
        </>
      ) : (
        <h1>...Loading</h1>
      )}
    </div>
  );
}
