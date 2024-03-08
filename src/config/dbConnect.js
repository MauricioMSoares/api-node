import mongoose, { mongo } from "mongoose";

// On project root, create a .env file
// In this file, create a DB_CONNECTION_STRING and insert the path to connect
// Example:
//
// DB_CONNECTION_STRING=mongodb+srv://admin:admin@cluster0.example.mongodb.net/library?retryWrites=true&w=majority
//

const connectDB = async () => {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
};

export default connectDB;
