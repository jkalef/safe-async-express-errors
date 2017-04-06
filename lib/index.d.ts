import { NextFunction, Request, RequestHandler, Response } from 'express';
export declare type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;
export default function safe(fn: AsyncRequestHandler): RequestHandler;
