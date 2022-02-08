import { gql, useMutation, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import { response } from "msw";
import "./index.scss";
import swal from "sweetalert";

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
  const [addTodo, { data, loading, error }] = useMutation(INSERT_USER);

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
    handleClose();
  }
  return (
    <div className="insert-form">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Name</label>
        <input
          id="name"
          name="name"
          onChange={formik.handleChange}
          defaultValue="name01"
          value={formik.values.name}
        />
        <label htmlFor="email">Rocket</label>
        <input
          id="rocket"
          name="rocket"
          defaultValue="name02"
          value={formik.values.rocket}
          onChange={formik.handleChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
