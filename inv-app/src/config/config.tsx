import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "datosBD",
  MONGO_USER: process.env.MONGO_USER || "admnin",
  MONGO_PASS: process.env.MONGO_PASS || "admin",
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  PORT: process.env.MONGO_PORT || 3000
};
