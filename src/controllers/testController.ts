import { Request, Response } from 'express';
import * as service from "../services/testService.js";
import { wrongSchemaError } from '../utils/errorUtils.js';

export const find = async (req: Request, res: Response) => {
  const { groupBy } = req.query as { groupBy: string } ;

  if(groupBy != 'disciplines' && groupBy != 'teachers' )  {
    return res.sendStatus(400);
  }

  const tests = await service.find({ groupBy });
  res.send({tests});
}

export const createTest = async (req: Request, res: Response) => {
  const test = req.body;
  if(!test) throw wrongSchemaError("Please fill in all necessary information about the test!");


  await service.createTest(test);

  res.sendStatus(201);
}