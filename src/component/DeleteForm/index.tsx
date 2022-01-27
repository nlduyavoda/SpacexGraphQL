import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { idText } from "typescript";
import Button from "../Button";
import "./index.scss";
import UpdateForm from "component/UpdateForm";
import InsertForm from "component/InsertForm";
const GET_LIST = gql`
  query users {
    users {
      id
      name
      rocket
    }
  }
`;
const DELETE_USER = gql`
  mutation delete_users($id: uuid_comparison_exp) {
    delete_users(where: { id: $id }) {
      returning {
        id
        name
        rocket
      }
    }
  }
`;
export default function DeleteForm() {
  const props = useQuery(GET_LIST);
  const [state, setState] = useState(props.data?.users ?? []);
  const [deleteToDo] = useMutation(DELETE_USER);
  const [ListIsEmpty, setListIsEmpty] = useState(false);
  const [userId, serUserId] = useState(null);

  const HandleRemove = (id: string) => {
    deleteToDo({
      variables: {
        id: {
          _eq: id,
        },
      },
    });
    const newData = props.data?.users.filter((item) => item.id !== id);
    setState(newData);
  };

  useEffect(() => {
    if (props.data?.users) {
      setState(props.data?.users);
    }
    if (props.data?.users.length === 0) {
      setListIsEmpty(true);
    }
  }, [props.data?.users]);
  return (
    <div className="form-spcex">
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>ROCKET</th>
          <th></th>
        </tr>
        {props.loading ? (
          <>
            <div>...loading</div>
          </>
        ) : (
          <>
            {ListIsEmpty ? (
              <div>list is empty</div>
            ) : (
              <>
                {state.map((item) => {
                  return (
                    <tr key={item.id} onClick={() => serUserId(item.id)}>
                      <td>{item.id}</td>
                      <td>{item.name ? item.name : "--/--"}</td>
                      <td>{item.rocket ? item.rocket : "--/--"}</td>
                      <td>
                        <Button
                          onClick={() => HandleRemove(item.id)}
                          itemId={item.id}
                        />
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </>
        )}
      </table>
      <UpdateForm userId={userId} />
      <InsertForm />
    </div>
  );
}
