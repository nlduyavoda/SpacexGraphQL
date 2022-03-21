import { Formik, useFormik } from "formik";
import { values } from "mobx";
import { stringify } from "querystring";
import "./index.scss";
export default function Form({ detail }) {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log("values :>> ", JSON.stringify(values, null, 2));
    },
  });
  console.log("detail :>> ", detail);
  return (
    <div className="form">
      {detail ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="label-input">
            <label htmlFor="title">title</label>
            <input id="title" name="title" defaultValue={detail.title} />
          </div>
          <div className="label-input">
            <label htmlFor="description">description</label>
            <input
              id="description"
              name="description"
              defaultValue={detail.description}
              onChange={formik.handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        "loading"
      )}
    </div>
  );
}
