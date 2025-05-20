// this file interacts with database

import { IStudent } from './student.interface';
import { Student } from './student.model';

const createStudentInDB = async (student: IStudent) => {
  const result = await Student.create(student); // using mongoose to create student in database

  return result;
};

const getStudentsFromDB = async () => {
  const result = await Student.find();

  return result;
};

export const StudentServices = {
  createStudentInDB,
  getStudentsFromDB,
};
