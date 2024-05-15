import express from 'express';
import { UserController } from './userController';

const router = express.Router();
const userController = new UserController();

router.route('/users/:id')
  .get(userController.find)
  .put(userController.update)
  .delete(userController.destroy);

router.route('/users')
  .get(userController.all)
  .post(userController.create);

export default router;