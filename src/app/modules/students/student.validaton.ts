import Joi from "joi";
import { IName, IStudent } from "./student.interface";

// crating joi validation schema
const nameJoiSchema = Joi.object<IName>({
  firstName: Joi.string()
    .required()
    .custom((value, helpers) => {
      // Custom validator checking if the name is capitalized
      const firstNameFormatValidation =
        value.charAt(0).toUpperCase() + value.slice(1);
      if (value !== firstNameFormatValidation) {
        return helpers.error("string.capitalize", { value });
      }
      return value;
    })
    .messages({
      "string.capitalize": "The name formation isn't correct",
      "any.required": "First name is required",
    }),
  middleName: Joi.string().allow(""),
  lastName: Joi.string()
    .required()
    .pattern(/^[a-zA-Z]+$/)
    .messages({
      "string.pattern.base": "{#value} isn't in right format",
      "any.required": "Last name is required",
    }),
});

const studentValidationSchemaByJoi = Joi.object<IStudent>({
  id: Joi.string().required().messages({
    "any.required": "ID is required",
  }),
  name: nameJoiSchema.required().messages({
    "any.required": "Can't skip the name",
  }),
  email: Joi.string().required().email().messages({
    "string.email": "{#value} isn't a valid E-Mail",
    "any.required": "Email is required",
  }),
  age: Joi.number().required().min(3).max(80).messages({
    "number.min": "Age can't be less than 3",
    "number.max": "Age can't be more than 80",
    "any.required": "Age is required",
  }),
  gender: Joi.string().required().valid("male", "female").messages({
    "any.only": "{#value} is not a valid gender",
    "any.required": "Gender is required",
  }),
});

export default studentValidationSchemaByJoi;
