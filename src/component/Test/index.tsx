import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { idText } from "typescript";
import Button from "../Button";
import "./index.scss";
import UpdateForm from "component/UpdateForm";
import InsertForm from "component/InsertForm";
import Loading from "component/Loading";
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
export default function List() {
  const { data, error, loading, refetch } = useQuery(GET_LIST);
  const [state, setState] = useState(data?.users ?? []);
  const [deleteToDo] = useMutation(DELETE_USER);
  const [ListIsEmpty, setListIsEmpty] = useState(false);
  const [userId, serUserId] = useState();

  const HandleRemove = (id: string) => {
    deleteToDo({
      variables: {
        id: {
          _eq: id,
        },
      },
    }).then(() => {
      refetch(GET_LIST);
    });
  };
  const handleInsert = () => {
    refetch(GET_LIST);
  };
  useEffect(() => {
    if (data?.users) {
      setState(data?.users);
    }
    if (data?.users.length === 0) {
      setListIsEmpty(true);
    }
  }, [data?.users]);

  return (
    <div className="form-spcex">
      {/* <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>ROCKET</th>
          <th></th>
        </tr>
        {loading ? (
          <Loading />
        ) : (
          <>
            {ListIsEmpty ? (
              <h1>is loading</h1>
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
      </table> */}
      <table style={{ width: "100%" }}>
        <div className="table-header">
          <td>Emil</td>
          <td>Tobias</td>
          <td>Linus</td>
          <td></td>
        </div>
        <>
          {ListIsEmpty ? (
            <h1>is loading</h1>
          ) : (
            <>
              {state.map((item) => {
                return (
                  <div className="table-item" key={item.id} onClick={() => serUserId(item.id)}>
                    <td>{item.id}</td>
                    <td>{item.name ? item.name : "--/--"}</td>
                    <td>{item.rocket ? item.rocket : "--/--"}</td>
                    <td>
                      <Button
                        onClick={() => HandleRemove(item.id)}
                        itemId={item.id}
                      />
                    </td>
                  </div>
                );
              })}
            </>
          )}
        </>
      </table>
    </div>
  );
}
