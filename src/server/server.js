import express from "express";
import { cors, cookieParser, rateLimiter } from "#middlewares";
import ENV from "#env";

const app = express();

app.use(
    cors({
        origin: ENV.CORS,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(rateLimiter)

export default app;
