import { gql, useMutation, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import "./index.scss";

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
  mutation update_users(
    $id: uuid_comparison_exp
    $name: String
    $rocket: String
  ) {
    update_users(where: { id: $id }, _set: { name: $name, rocket: $rocket }) {
      returning {
        id
        name
        rocket
      }
    }
  }
`;
export default function UpdateForm<PropsType>({ userId }) {
  const { data } = useQuery(USER_BY_ID, {
    variables: {
      id: userId,
    },
  });
  const [updateForm, PropsMutation] = useMutation(UPDATE_USER);

  const [state, setState] = useState(data?.users_by_pk);
  const formik = useFormik({
    initialValues: {
      name: "",
      rocket: "",
    },
    onSubmit: (values) => {
      console.log(values);
      updateForm({
        variables: {
          id: {
            _eq: state.id,
          },
          name: values.name,
          rocket: values.rocket,
        },
      });
    },
  });
  useEffect(() => {
    setState(data?.users_by_pk);
  }, [data?.users_by_pk]);

  return (
    <div className="update-form">
      <h1>Form Update</h1>
      {state ? (
        <>
          <form onSubmit={formik.handleSubmit}>
            <label>ID: </label>
            <input name="id" defaultValue={state.id} />
            <label>NAME: </label>
            <input
              name="name"
              defaultValue={state.name}
              onChange={formik.handleChange}
            />
            <label>ROCKET: </label>
            <input
              name="rocket"
              defaultValue={state.rocket}
              onChange={formik.handleChange}
            />
            <button type="submit">UPDATE</button>
          </form>
        </>
      ) : (
        <h1>Pick up a user to update this </h1>
      )}
    </div>
  );
}
