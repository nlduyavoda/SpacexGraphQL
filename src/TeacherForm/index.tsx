import "./index.scss";
import React, { useState } from "react";
import {
  Controller,
  useFieldArray,
  useForm,
  FormProvider,
} from "react-hook-form";
export default function TeacherForm() {
  const { register, handleSubmit } = useForm();

  const onsubmit1 = (data) => {
    console.log(data.props);
  };
  const onsubmit2 = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onsubmit1)}>
        <input {...register("props.name")} />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleSubmit(onsubmit2)}>
        <input {...register("props2.age")} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
