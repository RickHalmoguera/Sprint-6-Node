import mongoose from "mongoose"

const db_user = process.env.MONGO_USER;
const db_password = process.env.MONGO__PASS
export async function connectToDb() {
    try {
        await mongoose.connect(`mongodb+srv://rickH:MCY1eTNkBk6ovxwd@miranda.ngiybra.mongodb.net/miranda`, {
        });
    } catch (error) {
      console.error(error);
      return null;
    }
}