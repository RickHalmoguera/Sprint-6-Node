import usersData from '../data/users.json'
import { UserInterface } from '../models/User';

export const fetchAllUsers = (): UserInterface[] => {
    return usersData;
}

export const fetchUserById = (id: string): UserInterface | undefined => {
    const parsedId: number = parseInt(id);
    const user = usersData.find((user: UserInterface) => user.id === parsedId);

    return user
}