import { Schema } from 'mongoose';

export const UserSchema: Schema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  __v: { type: Number, select: false }
});