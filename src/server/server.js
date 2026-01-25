import express from "express";
import { connectDB } from "#connections";
connectDB();

const app = express()

export default app