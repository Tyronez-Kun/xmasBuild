import express from "express";

import menagerieRouter from "./routes/menagerie";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/menagerie', menagerieRouter);

export default app;
