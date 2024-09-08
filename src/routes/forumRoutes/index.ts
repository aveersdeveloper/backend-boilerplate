import { Router, Request, Response } from "express";
import Question from "../../models/forumModel/Question"; // Make sure to adjust the import path if different

const router = Router();

// Create a new question
router.post("/questions", async (req: Request, res: Response) => {
  try {
    const { question, description, questionAuthor } = req.body;
    const newQuestion = new Question({ question, description, questionAuthor });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: "Error creating question", details: error });
  }
});

// Get all questions
router.get("/questions", async (req: Request, res: Response) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: "Error fetching questions", details: error });
  }
});

// Get a specific question by ID
router.get("/questions/:id", async (req: Request, res: Response) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: "Error fetching question", details: error });
  }
});

// Update a question
router.put("/questions/:id", async (req: Request, res: Response) => {
  try {
    const { question, description, questionAuthor } = req.body;
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      { question, description, questionAuthor },
      { new: true, runValidators: true }
    );
    if (!updatedQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(500).json({ error: "Error updating question", details: error });
  }
});

// Delete a question
router.delete("/questions/:id", async (req: Request, res: Response) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!deletedQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }
    res.status(200).json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting question", details: error });
  }
});

// Add an answer to a question
router.post("/questions/:id/answers", async (req: Request, res: Response) => {
  try {
    const { description, answerAuthor } = req.body;
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }
    question.answers.push({ description, answerAuthor });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: "Error adding answer", details: error });
  }
});

// Update an answer by answer ID
// Corrected route for updating an answer
router.put(
  "/questions/:questionId/answers/:answerId",
  async (req: Request, res: Response) => {
    try {
      const { questionId, answerId } = req.params;
      const { description, answerAuthor } = req.body;

      // Use findOneAndUpdate with arrayFilters to update the nested answer
      const updatedQuestion = await Question.findOneAndUpdate(
        { _id: questionId, "answers._id": answerId },
        {
          $set: {
            "answers.$.description": description,
            "answers.$.answerAuthor": answerAuthor,
          },
        },
        { new: true, runValidators: true }
      );

      if (!updatedQuestion) {
        return res.status(404).json({ error: "Question or Answer not found" });
      }

      res.status(200).json(updatedQuestion);
    } catch (error) {
      res.status(500).json({ error: "Error updating answer", details: error });
    }
  }
);

// Corrected route for deleting an answer
router.delete(
  "/questions/:questionId/answers/:answerId",
  async (req: Request, res: Response) => {
    try {
      const { questionId, answerId } = req.params;

      // Use updateOne with $pull to remove the specific answer
      const updatedQuestion = await Question.findOneAndUpdate(
        { _id: questionId },
        { $pull: { answers: { _id: answerId } } },
        { new: true }
      );

      if (!updatedQuestion) {
        return res.status(404).json({ error: "Question or Answer not found" });
      }

      res.status(200).json(updatedQuestion);
    } catch (error) {
      res.status(500).json({ error: "Error deleting answer", details: error });
    }
  }
);

export default router;
