const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const  ProductRoute = require('./routes/Product');
const categoryRoutes = require('./routes/Category');


const { PORT, MONGO_URI } = process.env;
const port = PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', ProductRoute);
app.use("/api/category",categoryRoutes);

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});