import { Document } from 'mongoose';

export interface UserInterface extends Document {
  nome: string;
  email: string;
  senha: number;
}