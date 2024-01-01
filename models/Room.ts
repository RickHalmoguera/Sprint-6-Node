import mongoose, { Schema, Document } from "mongoose";

export interface RoomsInterface extends Document {
    photos: string[];
    room_type: string;
    room_number: number;
    description: string;
    offer: boolean;
    price: number;
    discount: number;
    cancellation: string;
    amenities: string[]; 
}

const roomsSchema = new Schema<RoomsInterface>({
    photos: { type: [String], required: true },
    room_type: { type: String, required: true },
    room_number: { type: Number, required: true },
    description: { type: String, required: true },
    offer: { type: Boolean, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    cancellation: { type: String, required: true },
    amenities: { type: [String], required: true },
});

const RoomsModel = mongoose.model<RoomsInterface>('Room', roomsSchema);

export default RoomsModel;
