const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://itayrot2584:itayrot2584@users.ra7dxz2.mongodb.net/?retryWrites=true&w=majority&appName=users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// mongoose.connect('mongodb://mongo:27017/testV2', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

app.get('/', (req, res) => {
    res.send('API is working!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
