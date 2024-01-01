import mongoose, { Schema, Document } from "mongoose";

export interface UserInterface extends Document {
    photo: string;
    name: string;
    lastname: string;
    email: string;
    start_date: Date;
    description: string;
    phone: string;
    is_active: boolean;
}

const userSchema = new Schema<UserInterface>({
    photo: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    start_date: { type: Date, required: true },
    description: { type: String, required: true },
    phone: { type: String, required: true },
    is_active: { type: Boolean, required: true },
});

const UserModel = mongoose.model<UserInterface>('User', userSchema);

export default UserModel;
