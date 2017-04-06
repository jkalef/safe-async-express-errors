import { NextFunction, Request, RequestHandler, Response } from 'express'


export type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>


export default function safe(fn: AsyncRequestHandler): RequestHandler {
  return (req: Request, res: Response, next: NextFunction): any => {
    return (<AsyncRequestHandler> fn)(req, res, next).catch(next)
  }
}