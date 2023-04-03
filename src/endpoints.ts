import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello from express plus Typescript");
});

router.get("/hi", (req: Request, res: Response) => {
  res.send("It is currently working right now, yes");
});

export default router;