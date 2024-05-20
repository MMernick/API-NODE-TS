import { Model } from 'mongoose';
import { UserInterface } from './interfaces/user.interface';
import { logger } from '../../logger';
import { CreateUserDto } from './dto/create.dto';
import { UpdateUserDto } from './dto/update.dto';

export class UserService {
  private readonly UserModel: Model<UserInterface>;

  constructor(userModel: Model<UserInterface>) {
    this.UserModel = userModel;
  }

  async all(): Promise<CreateUserDto[]> {
    try {
      return await this.UserModel.find({});
    } catch (error) {
      logger.error(`Error fetching all users: ${error}`);
      throw new Error('Failed to fetch users');
    }
  }

  async find(id: string): Promise<CreateUserDto | null> {
    try {
      return await this.UserModel.findById(id);
    } catch (error) {
      logger.error(`Error finding user: ${error}`);
      throw new Error('Failed to find user');
    }
  }

  async create(data: Partial<CreateUserDto>): Promise<Partial<CreateUserDto>> {
    try {
      const createdUser = await this.UserModel.create(data);
      const { nome, email } = createdUser.toObject();

      return { nome, email };
    } catch (error) {
      logger.error(`Error creating user: ${error}`);
      throw new Error('Failed to create user');
    }
  }

  async update(id: string, data: UpdateUserDto): Promise<Partial<UserInterface | null>> {
    try {
      const user = await this.UserModel.findById(id);
      if (!user) throw new Error('User not found');

      const updatedUser = await this.UserModel.findByIdAndUpdate(id, data);

      return updatedUser;
    } catch (error) {
      logger.error(`Error updating user: ${error}`);
      throw new Error('Failed to update user');
    }
  }

  async destroy(id: number): Promise<void> {
    try {
      const user = await this.UserModel.findById(id);
      
      if (!user) {
        throw new Error('User not found');
      }

      await this.UserModel.findByIdAndDelete(id);
    } catch (error) {
      logger.error(`Error deleting user: ${error}`);
      throw new Error('Failed to delete user');
    }
  }
}