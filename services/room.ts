import roomsData from '../data/rooms.json'
import { RoomsInterface } from '../models/Room'

export const fetchAllRooms = (): RoomsInterface[] => {
    return roomsData
}

export const fetchRoomById = (id:string): RoomsInterface | undefined =>{
    const parsedId: number = parseInt(id)
    const room = roomsData.find((room: RoomsInterface) => room.id === parsedId)
    return room
}