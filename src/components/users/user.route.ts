import express from 'express';
import { UserService } from './user.service';
import { UserModel } from './user.model';
import { UserController } from './user.controller';

const router = express.Router();

const userService = new UserService(UserModel);
const userController = new UserController(userService);

router.route('/users/:id')
  .get(userController.find.bind(userController))
  .put(userController.update.bind(userController))
  .delete(userController.destroy.bind(userController));

router.route('/users')
  .get(userController.all.bind(userController))
  .post(userController.create.bind(userController));

export default router;