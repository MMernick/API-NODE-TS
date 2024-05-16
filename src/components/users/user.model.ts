import mongoose from 'mongoose';
import { UserSchema } from './user.schema';
import { UserInterface } from './interfaces/user.interface';

export const UserModel = mongoose.model<UserInterface>('User', UserSchema);