import mongoose, { Schema, Document } from "mongoose";
import { RoomsInterface } from "./Room"; 

export interface BookingInterface extends Document {
    name: string;
    lastname: string;
    order_date: Date;
    checkin: Date;
    checkout: Date;
    notes: string;
    room: RoomsInterface;
    status: string;
}

const bookingSchema = new Schema<BookingInterface>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    order_date: { type: Date, default: Date.now, required: true },
    checkin: { type: Date, required: true },
    checkout: { type: Date, required: true },
    notes: { type: String, required: true },
    room: { type: Schema.Types.ObjectId, ref: 'Room', required: true }, 
    status: { type: String, required: true },
});

const BookingModel = mongoose.model<BookingInterface>('Booking', bookingSchema);

export default BookingModel;
