import { Schema, model, connect } from 'mongoose';
import { IName, IStudent } from './student.interface';

const nameSchema = new Schema<IName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const studentSchema = new Schema<IStudent>({
  id: String, // these type would be capitalized
  name: nameSchema,
  age: {
    type: Number,
    required: true,
  },
  gender: ['male', 'female'], // this is enum type
});

const Student = model<IStudent>('Student', studentSchema); // name would be capitalized
