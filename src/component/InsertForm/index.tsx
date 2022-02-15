import { gql, useMutation } from "@apollo/client";
import { useFormik } from "formik";
import swal from "sweetalert";
import "./index.scss";

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
export default function InsertForm({ refetchList, handleClose }) {
  const [addTodo, { loading }] = useMutation(INSERT_USER);

  const formik = useFormik({
    initialValues: {
      name: "Peter-01",
      rocket: "Flash-01",
    },
    onSubmit: (values) => {
      addTodo({ variables: values }).then(() => {
        refetchList();
      });
    },
  });
  if (loading) {
    swal("Good job!", "create successful!", "success");
    handleClose();
  }
  return (
    <div className="insert-form">
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input id="name" name="name" onChange={formik.handleChange} />
        <label>Rocket</label>
        <input id="rocket" name="rocket" onChange={formik.handleChange} />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
