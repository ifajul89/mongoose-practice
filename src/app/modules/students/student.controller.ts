import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentValidationSchemaByJoi from "./student.validaton";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const { error } = studentValidationSchemaByJoi.validate(studentData);

    if (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.details,
      });
    }

    const result = await StudentServices.createStudentInDB(studentData);

    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      Error: err,
    });
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getStudentsFromDB();

    res.status(200).json({
      success: true,
      message: "Students are retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const result = await StudentServices.getSingleStudentFromDB(id);

    res.status(200).json({
      success: true,
      message: "Student data retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getStudents,
  getSingleStudent,
};
