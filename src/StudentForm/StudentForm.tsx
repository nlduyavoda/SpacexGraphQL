import React from "react";
import './StudentForm.scss'

/*
  Using react hook form
  Ex 1: Click button submit, alert whole form value as object, which can display all info
  Ex 2: Add required validation for Name and Gender when submit form. Show error message below missing field
  Ex 3: When gender is Male, add required at least 2 habit
  Ex 4: When gender is Female, disabled Hobbies.
*/

function StudentForm() {
  return (
    <form>
      <div>
        <label>Name: &nbsp;</label>
        <input name="name" />
      </div>
      <div>
        <label>Gender: &nbsp;</label>
        <input name="gender" type="radio" value="male" />: Male
        <input name="gender" type="radio" value="female" />: Female
      </div>
      <div>
        <label>Hobbies: &nbsp;</label>
        <input name="reading" type="checkbox" value="reading" />: Reading
        <input name="playing" type="checkbox" value="playing" />: Playing
      </div>

      <div>
        Habit:
        <br />
        <input type="Habit" />
        <br />
        <button>Click to add more habit</button>
      </div>

      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

export default StudentForm;
