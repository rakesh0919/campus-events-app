require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Event = require('./models/event.model.js')
const eventRoutes = require('./routes/event.route.js');

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware configuration
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Homepage
app.get('/', (req,res) =>{
    res.send("Hello William");
});

//Routes
app.use("/api/events", eventRoutes);


//Connect Database
mongoose.connect("mongodb+srv://rakesh:rakesh@campus-events-backend.q0n0udi.mongodb.net/database?retryWrites=true&w=majority&appName=Campus-Events-Backend")
.then(() => {
    console.log("Connected to Database!");
    //Start Server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
})
.catch(() => {
    console.log("Connection to Database failed!");
})