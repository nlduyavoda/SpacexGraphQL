import React, { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import "./StudentForm.scss";
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
    resetField,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      gender: "",
      habits: "",
      Hobbies: [{ title: "Bill" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "Hobbies",
  });
  const [isChecked, setIsChecked] = useState("");
  const [validateGender, setValidateGender] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = (data) => {
    if (isChecked === "") {
      setError("gender", {
        types: {
          required: true,
        },
      });
    } else if (validateGender) {
      console.log(isChecked);
    } else if (!validateGender) {
      verifyMaleTextField(data.gender);
    }
  };
  const verifyMaleTextField = (gender: string) => {
    if (gender === "male" && fields.length < 2) {
      append({ title: "..." });
      setValidateGender(true);
    } else {
      setValidateGender(false);
    }
  };
  const verifyFemaleTextField = (gender: string) => {
    setIsDisabled(true);
    setValidateGender(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let gender = e.target.value;
    if (gender === "male") {
      verifyMaleTextField(gender);
      setIsDisabled(false);
    } else if (gender === "female") {
      resetField("Hobbies");
      verifyFemaleTextField(gender);
    }
    setIsChecked(e.target.value);
  };
  const handleRemove = (index, gender) => {
    verifyMaleTextField(gender);
    remove(index);
  };
  const handleAppend = () => {
    append({ title: "..." });
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
        <div>
          <input
            {...register("gender", {
              onChange: handleChange,
            })}
            type="radio"
            checked={isChecked === "female"}
            value="female"
          />
          : Female
        </div>
        <div>
          <input
            type="radio"
            checked={isChecked === "male"}
            value="male"
            {...register("gender", {
              onChange: handleChange,
            })}
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
                      {...register(`Hobbies.${index}.title`)}
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
          type="button"
          disabled={isDisabled}
          onClick={() => handleAppend()}
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
