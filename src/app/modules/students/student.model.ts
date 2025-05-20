import { Schema, model } from 'mongoose';
import { IName, IStudent } from './student.interface';

const nameSchema = new Schema<IName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const studentSchema = new Schema<IStudent>({
  id: { type: String, required: true, unique: true }, // these type would be capitalized
  name: {
    type: nameSchema,
    required: [true, "Can't skip the name"], // custom validation
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not a valid gender',
    }, // this is enum type
  },
});

// 'Student' will be Students as collection name in mongodb
export const Student = model<IStudent>('Student', studentSchema); // name would be capitalized
