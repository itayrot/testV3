const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./config/db');
// Connect to database
connectDB();

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is working!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const usersRouter = require('./routes/userRoutes.js');
app.use('/users', usersRouter);

