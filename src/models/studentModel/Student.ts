import mongoose from "mongoose";

// Defining a simple model with fields: name and course
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This field must be filled out, like making the name mandatory on a form.
  },
  course: {
    type: String,
    required: true, // The course field is also required, ensuring consistency in the stored data.
  },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
