const express =  require('express');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts')
const usersUsers = require('./routes/users')
const morgan = require('morgan')
// const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'})
const PORT = process.env.PORT || 6000;
const app = express();
app.use(express.json());

// Connect to DB
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASS);
mongoose.connect(DB).then(() => console.log("DATABASE connected successfuly"))

// Listen to the Port 
app.listen(PORT, (err) => {
    if(!err) return console.log(`server starts at port ${PORT}`);
    console.log(err);
});

// Routing
app.use('/api/posts', morgan('tiny'), postsRoutes);
app.use('/api/users', morgan('tiny'), usersUsers);