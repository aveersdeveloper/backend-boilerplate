import { NextFunction, Request, Response } from "express";

// Middleware for logging requests
export const requestLog = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
  }