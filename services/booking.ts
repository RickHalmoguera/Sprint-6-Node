import bookingsData from '../data/guest.json'
import { BookingInterface } from '../models/Booking'

export const fetchAllBookings = (): BookingInterface[] => {
    return bookingsData;
}

export const fetchBookingById = (id:string): BookingInterface | undefined =>{
    const parsedId: number = parseInt(id);
    const booking = bookingsData.find((booking: BookingInterface) => booking.id === parsedId);
    return booking
}