import { Router, Request, Response } from "express";
import Student from "../../models/studentModel/Student"; // Importing the model created earlier.

const router = Router();

// POST Route - Create a New Student
// This route handles creating a new student record using data from the request body.
router.post("/students", async (req: Request, res: Response) => {
  try {
    const student = new Student(req.body); // Creates a new student using the data provided.
    await student.save(); // Saves the new student to the database.
    res.status(201).send(student); // Responds with the created student and a 201 status code indicating creation.
  } catch (error) {
    res.status(400).send({ message: "Error creating student", error });
  }
});

// GET Route - Retrieve All Students
// This route fetches all students from the database.
router.get("/students", async (req: Request, res: Response) => {
  try {
    const students = await Student.find(); // Retrieves all student records.
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send({ message: "Error fetching students", error });
  }
});

// PUT Route - Update a Student by ID
// This route updates an existing student record based on the provided ID.
router.put("/students/:id", async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!student) return res.status(404).send({ message: "Student not found" });
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send({ message: "Error updating student", error });
  }
});

// DELETE Route - Remove a Student by ID
// This route deletes a student record from the database.
router.delete("/students/:id", async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).send({ message: "Student not found" });
    res.status(200).send({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting student", error });
  }
});

export default router;
