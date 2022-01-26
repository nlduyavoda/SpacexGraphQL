import { gql, useMutation, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import { response } from "msw";
import { useState } from "react";
import "./index.scss";

const GET_LIST = gql`
  query users {
    users {
      id
      name
      rocket
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
      }
    }
  }
`;
export default function DeleteForm(params) {
  const props = useQuery(GET_LIST);
  const [state, setState] = useState(null);
  const [addTodo, { data, loading, error }] = useMutation(INSERT_USER);

  const formik = useFormik({
    initialValues: {
      name: "Peter-01",
      rocket: "Flash-01",
    },
    onSubmit: (values) => {
      // console.log(values);
      addTodo({ variables: values });
    },
  });
  return (
    <div className="form-spcex">
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>ROCKET</th>
        </tr>
        {props.loading ? (
          <>
            <h1>...loading</h1>
          </>
        ) : (
          <>
            {props.data.users.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name ? item.name : "--/--"}</td>
                  <td>{item.rocket ? item.rocket : "--/--"}</td>
                </tr>
              );
            })}
          </>
        )}
      </table>
    </div>
  );
}
