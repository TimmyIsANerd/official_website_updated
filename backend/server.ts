import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth';

// Configurations
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
dotenv.config();

// Mount Routes
app.use('/auth', authRoutes);

// serve frontend
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(path.join(__dirname, './build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}
// DB connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    // Listen to Port
    app.listen(PORT, () => console.log(`App running on port ${PORT}`));
    console.log('Connected to DB');
  })
  .catch((error: any) => {
    throw new Error(error);
  });
