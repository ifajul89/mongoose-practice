import express from "express";
import { StudentController } from "./student.controller";

const router = express.Router();

// it will call controller function
router.post("/create-student", StudentController.createStudent);
router.get("/", StudentController.getStudents);
router.get("/:id", StudentController.getSingleStudent);

export const StudentRoutes = router;
