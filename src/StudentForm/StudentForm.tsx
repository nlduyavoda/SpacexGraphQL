import React, { useState } from "react";
import "./StudentForm.scss";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { off } from "process";
/*
  Using react hook form
  Ex 1: Click button submit, alert whole form value as object, which can display all info
  Ex 2: Add required validation for Name and Gender when submit form. Show error message below missing field
  Ex 3: When gender is Male, add required at least 2 habit
  Ex 4: When gender is Female, disabled Hobbies.
*/

function StudentForm() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      gender: "",
      habits: "",
      Hobbies: [{ firstName: "Bill" }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({
      control,
      name: "Hobbies",
    });
  const [isChecked, setIsChecked] = useState("");
  const [validateGender, setValidateGender] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  // const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
  //   name: "test", // unique name for your Field Array
  //   // keyName: "id", default to "id", you can change the key name
  // });

  const onSubmit = (data) => {
    if (isChecked === "") {
      setError("gender", {
        types: {
          required: true,
        },
      });
    }
    if (validateGender) {
      setTimeout(() => {
        console.log(data);
      }, 1000);
    }
    if (!validateGender) {
      verifyMaleTextField(data.gender);
    }
  };
  const verifyMaleTextField = (gender: string) => {
    if (gender === "male" && fields.length < 2) {
      append({ firstName: "..." });
      setValidateGender(true);
    } else {
      setValidateGender(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gender = e.target.value;
    if (gender === "male") {
      verifyMaleTextField(e.target.value);
      setIsDisabled(false);
    } else if (gender === "female") {
      setIsDisabled(true);
    }
    setIsChecked(e.target.value);
  };
  const handleRemove = (index, gender) => {
    verifyMaleTextField(gender);
    remove(index);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name: &nbsp;</label>
        <input name="name" {...register("name", { required: true })} />
        {errors?.name?.type === "required" && (
          <div className="validate">This field is required !</div>
        )}
      </div>
      <div style={{ display: "flex" }}>
        <label>Gender: &nbsp;</label>
        <div {...register("gender", { required: true })}>
          <input
            name="gender"
            type="radio"
            checked={isChecked === "female"}
            value="female"
            onChange={handleChange}
          />
          : Female
        </div>
        <div {...register("gender", { required: true })}>
          <input
            name="gender"
            type="radio"
            checked={isChecked === "male"}
            value="male"
            onChange={handleChange}
          />
          : Male
        </div>
      </div>
      {errors.gender && (
        <div className="validate">This options is required !</div>
      )}
      <div>
        <label>Hobbies: &nbsp;</label>
        <input
          name="reading"
          type="checkbox"
          value="reading"
          {...register("habits")}
        />
        : Reading
        <input
          name="playing"
          type="checkbox"
          value="playing"
          {...register("habits")}
        />
        : Playing
      </div>

      <div>
        Habit:
        <br />
        {fields.map((item, index) => {
          return (
            <div className="Hobbies">
              <li key={item.id}>
                <Controller
                  key={item.id}
                  render={() => (
                    <input
                      disabled={isDisabled}
                      key={item.id}
                      {...register(`Hobbies.${index}.firstName`)}
                    />
                  )}
                  name="Hobbies"
                  control={control}
                />
                <button
                  type="button"
                  disabled={isDisabled}
                  onClick={() => handleRemove(index, isChecked)}
                >
                  Delete
                </button>
              </li>
            </div>
          );
        })}
        <br />
        <button
          disabled={isDisabled}
          onClick={() => append({ firstName: "..." })}
        >
          Click to add more habit
        </button>
      </div>

      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
