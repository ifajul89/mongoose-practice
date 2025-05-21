import { Schema, model } from "mongoose";
import { IName, IStudent } from "./student.interface";
import validator from "validator";

const nameSchema = new Schema<IName>({
  firstName: {
    type: String,
    required: true,
    validate: {
      // custom validator cheking if the name is capitalized
      validator: function (value: string) {
        const firstNameFormatValidation =
          value.charAt(0).toUpperCase() + value.slice(1);

        return value === firstNameFormatValidation;
      },
      message: "The name fomation isn't correct",
    },
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: "{VALUE} isn't in right format",
    },
  },
});

const studentSchema = new Schema<IStudent>({
  id: { type: String, required: true, unique: true }, // these type would be capitalized
  name: {
    type: nameSchema,
    required: [true, "Can't skip the name"], // custom validation
    minlength: [2, "Name can't be less than 2 Characters"],
    maxlength: [2, "Name can't be less more 30 Characters"],
    trim: true, // removes spacef from front and back
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "{VALUE} isn't a valid E-Mail",
    },
  },
  age: {
    type: Number,
    required: true,
    min: [3, "Age can't be less than 3"],
    max: [80, "Age can't be more than 80"],
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ["male", "female"],
      message: "{VALUE} is not a valid gender",
    }, // this is enum type
  },
});

// 'Student' will be Students as collection name in mongodb
export const Student = model<IStudent>("Student", studentSchema); // name would be capitalized
