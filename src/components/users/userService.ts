import UserModel from './userModel';
import { UserInterface } from './interfaces/userInterface';

export class UserService {
  async all(): Promise<UserInterface[]> {
    return await UserModel.find({});
  }

  async find(id: string): Promise<UserInterface | null> {
    try {
      const user = await UserModel.findById(id);
      return user;
    } catch(error: any){
      throw new Error('User not found');
    }
  }

  async create(data: UserInterface): Promise<UserInterface> {
    return await UserModel.create(data);
  }

  async update(id: string, data: Partial<UserInterface>): Promise<UserInterface | null> {
    const existingUser = await UserModel.findById(id);
    
    if (!existingUser) {
      throw new Error('User not found');
    }

    return await UserModel.findByIdAndUpdate(id, data);
  }

  async destroy(id: string): Promise<void> {
    const existingUser = await UserModel.findById(id);
    
    if (!existingUser) {
      throw new Error('User not found');
    }

    await UserModel.findByIdAndDelete(id);
  }
}