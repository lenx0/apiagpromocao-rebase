import mongoose from "mongoose";

require('dotenv').config();

const connectString = process.env.MONGO_URI as string;

mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

export default mongoose;