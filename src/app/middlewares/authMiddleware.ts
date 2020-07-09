import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export default function authMiddleware(request: Request, response: Response, next: NextFunction) {


  const { authorization } = request.headers;

  if (!authorization) {
    console.log('erro 1');

    return response.sendStatus(401);

  }

  const token = authorization.replace('Bearer', '').trim();

  try {

    const data = jwt.verify(token, 'default');
    console.log(data)

  } catch {
    console.log('erro 2');
    return response.sendStatus(401);

  }
}