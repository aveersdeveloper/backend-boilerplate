import { Schema, model, Document } from "mongoose";

// Interface representing the answer object
interface Answer {
  description: string;
  answerAuthor: string;
}

// Interface representing the Question document
interface QuestionDocument extends Document {
  question: string;
  description: string;
  questionAuthor: string;
  answers: Answer[];
}

// Answer Schema
const AnswerSchema = new Schema<Answer>(
  {
    description: { type: String, required: true },
    answerAuthor: { type: String, required: true },
  },
  { timestamps: true }
);

// Question Schema
const QuestionSchema = new Schema<QuestionDocument>(
  {
    question: { type: String, required: true },
    description: { type: String, required: true },
    questionAuthor: { type: String, required: true },
    answers: { type: [AnswerSchema], default: [] },
  },
  { timestamps: true }
);

export default model<QuestionDocument>("Question", QuestionSchema);
