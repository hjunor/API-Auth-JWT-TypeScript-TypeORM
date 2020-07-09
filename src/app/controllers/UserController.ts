import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/Users'
class UserController {

  async store(request: Request, response: Response) {
    const repository = getRepository(User);

    const user = await repository.find()

    return response.json(user);

  }
  async  create(request: Request, response: Response) {

    const repository = getRepository(User);
    const { email, password } = request.body;

    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {

      return response.sendStatus(409).json(userExists);

    }

    const user = await repository.create({ email, password });

    await repository.save(user);

    return response.json(user)
  }

}

export default new UserController();