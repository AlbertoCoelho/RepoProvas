import { Request,Response } from "express";
import * as service from "../services/authService.js";

export const signUp = async (req:Request, res: Response) => {
  const user = req.body;
  await service.createUser(user);
  res.sendStatus(201);
}

export const signIn =async (req:Request, res: Response) => {
  const user = req.body;
  const token = await service.login(user);
  res.send({token});
}