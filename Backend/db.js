import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const mongoURI =process.env.MONGO_URL;
const connectToMongo = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Exit process with failure
    }
  };
export default connectToMongo;