import { Schema, model, connect } from 'mongoose';
import { IStudent } from './student.interface';

const userSchema = new Schema<IStudent>({
  id: String, // these type would be capitalized
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  age: {
    type: Number,
    required: true,
  },
  gender: ['male', 'female'], // this is enum type
});
