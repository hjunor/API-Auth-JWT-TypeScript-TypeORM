import { Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
const routes = Router();

routes.post('/users', UserController.create);
routes.get('/users', authMiddleware, UserController.store);
routes.post('/auth', AuthController.auth);

export default routes;