import dotenv from 'dotenv'
import express from 'express';
import bodyParse from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import loadCardsFromExternal from './middleware/loadCards.js';
import cardRoutes from './routes/card.js';

dotenv.config()
console.log(process.env.DB_USER,process.env.DB_PASS,)
// Database
mongoose.connect('mongodb://localhost:27017/gameapp?authSource=admin',
 { 
     user: process.env.DB_USER,
     pass: process.env.DB_PASS,
     useNewUrlParser: true,
     useUnifiedTopology: true 
}).then(() => console.log('Connected to database...'))
  .catch(err => console.error(`Error: ${err}`));

const app = express();

app.use(bodyParse.json({ limit: "30mb", extended: true }));
app.use(bodyParse.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(loadCardsFromExternal)
app.use('/api/cards', cardRoutes);

app.listen(5000, () => console.log("Server has started on port 3000..."));