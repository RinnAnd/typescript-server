import express, { Express, Request, Response } from "express";
import endpoints from './src/endpoints';

const app: Express = express();

const port = 2023;

app.listen(port, () => {
  console.log(`Server connected to the port ${port}`);
});

app.use(endpoints)

export default app;