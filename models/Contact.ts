import mongoose, { Schema, Document } from "mongoose";

export interface ContactInterface extends Document {
    photo: string[];
    name: string;
    lastname: string;
    email: string;
    phone: string;
    title: string;
    text: string;
    is_archived: boolean;
    date: Date;
}

const contactSchema = new Schema<ContactInterface>({
    photo: { type: [String], required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    is_archived: { type: Boolean, required: true },
    date: { type: Date, required: true },
});

const ContactModel = mongoose.model<ContactInterface>('Contact', contactSchema);

export default ContactModel;
