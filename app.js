import express from "express";

import menagerieRouter from "./routes/menagerie.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/menagerie', menagerieRouter);
console.log("I'm listening :O")

export default app;
