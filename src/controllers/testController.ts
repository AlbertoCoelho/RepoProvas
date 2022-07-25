import { Request, Response } from 'express';
import * as service from "../services/testService.js";

export const find = async (req: Request, res: Response) => {
  const { groupBy } = req.query as { groupBy: string } ;

  if(groupBy != 'disciplines' && groupBy != 'teachers' )  {
    return res.sendStatus(400);
  }

  const tests = await service.find({ groupBy });
  res.send({tests});
}
