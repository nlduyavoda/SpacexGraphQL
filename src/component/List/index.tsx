import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Button from "../Button";
import "./index.scss";
import InsertForm from "component/InsertForm";
import Loading from "component/Loading";
import {
  AiFillEdit,
  AiFillCheckCircle,
  AiOutlinePlus,
  AiOutlineCloseSquare,
} from "react-icons/ai";
import swal from "sweetalert";
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
export default function List() {
  const { data, error, loading, refetch } = useQuery(GET_LIST);
  const [state, setState] = useState(data?.users ?? []);
  const [deleteToDo, deleteProps] = useMutation(DELETE_USER);
  const [updateForm, UpdateProps] = useMutation(UPDATE_USER);
  const [values, setValues] = useState({
    name: "",
    rocket: "",
  });
  const [ListIsEmpty, setListIsEmpty] = useState(false);
  const [editing, setEditing] = useState<{ id: string; status: boolean }>({
    id: "",
    status: false,
  });
  const HandleRemove = (id: string) => {
    deleteToDo({
      variables: {
        id: {
          _eq: id,
        },
      },
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
  const handleUpdate = (updateValues) => {
    swal("Confirm, Please !", {
      buttons: ["cancel", "update"],
    }).then((value) => {
      setEditing({
        id: "",
        status: false,
      });
      updateForm({
        variables: {
          id: {
            _eq: updateValues.id,
          },
          name: !!updateValues.name
            ? updateValues.name
            : updateValues.defaultName,
          rocket: !!updateValues.rocket
            ? updateValues.rocket
            : updateValues.defaultRocket,
        },
      });
    });
    console.log(updateValues);
  };
  if (UpdateProps.loading) {
    swal("Good job!", "This guy is updated!", "success");
  }
  if (deleteProps.loading) {
    swal("Are you sure !", "", "warning").then(() => {
      refetch(GET_LIST);
    });
  }
  const btnModal = document.getElementById("floating-btn");
  const modal = document.getElementById("modal");
  const btnClose = document.getElementsByClassName("close");
  const handleOpenModal = () => {
    modal.classList.remove("out");
    modal.classList.add("open");
  };
  const handleClose = () => {
    modal.classList.remove("open");
    modal.classList.add("out");
  };
  return (
    <div className="form-spcex">
      <table>
        <div className="table-header">
          <td>ID</td>
          <td>NAME</td>
          <td>ROCKET</td>
          <td></td>
        </div>
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
                    <div className="table-item" key={item.id}>
                      <td>{item.id}</td>

                      {item.id !== editing.id && editing ? (
                        <>
                          <td>{item.name ? item.name : "--/--"}</td>
                          <td>{item.rocket ? item.rocket : "--/--"}</td>
                        </>
                      ) : (
                        <>
                          <td>
                            <input
                              type="text"
                              name="name"
                              onChange={(e) =>
                                setValues({ ...values, name: e.target.value })
                              }
                              defaultValue={item.name ? item.name : "--/--"}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              onChange={(e) =>
                                setValues({ ...values, rocket: e.target.value })
                              }
                              defaultValue={item.rocket ? item.rocket : "--/--"}
                            />
                          </td>
                        </>
                      )}

                      <td>
                        {item.id !== editing.id && editing ? (
                          <div
                            className="btn-edit"
                            onClick={() =>
                              setEditing({
                                id: item.id,
                                status: !editing.status,
                              })
                            }
                          >
                            <AiFillEdit />
                          </div>
                        ) : (
                          <div
                            className="btn-check"
                            onClick={() =>
                              handleUpdate({
                                id: item.id,
                                name: values.name,
                                rocket: values.rocket,
                                defaultName: item.name,
                                defaultRocket: item.rocket,
                              })
                            }
                          >
                            <AiFillCheckCircle />
                          </div>
                        )}

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
        )}
      </table>
      <button
        className="floating-btn"
        id="floating-btn"
        onClick={handleOpenModal}
      >
        <AiOutlinePlus />
      </button>
      <div className="modal" id="modal">
        <div className="modal-content ">
          <span className="close" id="close" onClick={() => handleClose()}>
            <AiOutlineCloseSquare />
          </span>
          <InsertForm refetchList={handleInsert} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
}
