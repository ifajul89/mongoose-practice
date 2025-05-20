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

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ _id: id });

  return result;
};

export const StudentServices = {
  createStudentInDB,
  getStudentsFromDB,
  getSingleStudentFromDB,
};
