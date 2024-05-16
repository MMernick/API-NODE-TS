import { Request, Response } from 'express';
import { UserService } from './user.service';

import { validate } from 'class-validator';
import { formatErrors } from '../../libraries/error.formatter';

import { CreateUserDto } from './dto/create.dto';
import { UpdateUserDto } from './dto/update.dto';

export class UserController {
  constructor(
    private readonly userService: UserService = userService
  ) {}

  async all(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.all();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async find(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const user = await this.userService.find(id);

      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data = new CreateUserDto(req.body);
      const errors = await validate(data);

      if (errors.length > 0) {
        const response = formatErrors(errors);
        res.status(400).json(response);
        return;
      }

      const user = await this.userService.create(data);

      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const data = new UpdateUserDto(req.body);
      const errors = await validate(data);

      if (errors.length > 0) {
        const response = formatErrors(errors);
        res.status(400).json(response);
        return;
      }

      const user = await this.userService.update(id, data);

      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async destroy(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      await this.userService.destroy(id);

      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}