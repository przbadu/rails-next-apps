import { Document, Schema, model, models } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  content: string;
  views: number;
  tags: Schema.Types.ObjectId[];
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const QuestionSchema = new Schema<IQuestion>({
  title: { type: Schema.Types.String, required: true },
  content: { type: Schema.Types.String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  views: { type: Schema.Types.Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const Question = models.Question || model("Question", QuestionSchema); // find or create Question table

export default Question;
