import "./index.scss";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
export default function FormikForm() {
  const initialValues = {
    friends: [{ name: "bryant" }, { name: "alex" }, { name: "john" }],
  };
  return (
    <div className="formik-form">
      <div>
        <h1>Invite friends</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            console.log(values.friends);
          }}
        >
          {({ values }) => (
            <Form>
              <FieldArray
                name="friends"
                render={(arrayHelpers) => (
                  <div>
                    {values.friends && values.friends.length > 0 ? (
                      values.friends.map((friend, index) => (
                        <div key={index}>
                          <Field name={`friends.${index}.name`} />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            +
                          </button>
                        </div>
                      ))
                    ) : (
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push("")}
                      >
                        {/* show this when user has removed all friends from the list */}
                        Add a friend
                      </button>
                    )}
                    <div>
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                )}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
