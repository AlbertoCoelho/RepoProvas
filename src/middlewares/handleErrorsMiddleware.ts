import { Request, Response, NextFunction } from 'express';

import { errorTypeToStatusCode, isAppError } from "../utils/errorUtils.js";

export const handleErrorsMiddleware = (err: object, req: Request, res: Response, next: NextFunction) => {
  console.log("Ooops! An error occured!", err);
  
  if(isAppError(err)) {
    const statusCode = errorTypeToStatusCode(err.type);
    return res.status(statusCode).send(err.message)
  }

  res.sendStatus(500);
}
