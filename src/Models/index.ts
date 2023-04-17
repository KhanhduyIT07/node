import { Schema, model } from 'mongoose';

interface Iuser {
  name: String;
  phone: String;
}
const indexSchema = new Schema<Iuser>({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
});
const User = model<Iuser>('User', indexSchema);

export default User;
