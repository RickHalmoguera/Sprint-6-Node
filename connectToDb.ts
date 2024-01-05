import mongoose from "mongoose"

const mongo_url = process.env.MONGO_URL;


export async function connectToDb() {
    try {
        await mongoose.connect(`${mongo_url}`, {
        });
    } catch (error) {
      console.error(error);
      return null;
    }
}