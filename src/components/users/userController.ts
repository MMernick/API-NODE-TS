import { Request, Response } from 'express';
import { UserService } from './userService';
import { UserInterface } from './interfaces/userInterface';

const userService = new UserService();

export class UserController {
  async all(req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.all();
      
      res.status(201).json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async find(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const user = await userService.find(id);

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
      const userData: UserInterface = req.body;
      const newUser = await userService.create(userData);
      
      res.status(201).json(newUser);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const data: UserInterface = req.body;
      const updatedUser = await userService.update(id, data);
      
      res.status(200).json(updatedUser);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async destroy(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      await userService.destroy(id);
      
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}