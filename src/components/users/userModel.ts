import mongoose from 'mongoose';
import { UserSchema } from './userSchema';
import { UserInterface } from './interfaces/userInterface';

const UserModel = mongoose.model<UserInterface>('User', UserSchema);

export default UserModel;