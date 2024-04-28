require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Event = require('./models/event.model.js')

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware configuration
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', (req,res) =>{
    res.send("Hello William");
});

//Routes
app.use("/api/events", eventRoutes);

//Add An Event
app.post('/api/events', async (req,res) => {
    try{
        const event = await Event.create(req.body);
        res.status(200).json(event);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

//Get All Events
app.get('/api/events', async(req,res) => {
    try{
        const events = await Event.find({});
        res.status(200).json(events);
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

//Get One Event
app.get('/api/events/:id', async(req,res) => {
    try{
        const { id } = req.params;
        const event = await Event.findById(id);

        if(!event){
            return res.status(404).json({message: "Event not found"});
        }

        res.status(200).json(event);
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

//Update An Event
app.put('/api/events/:id', async(req,res) => {
    try{
        const { id } = req.params;

        const event = await Event.findByIdAndUpdate(id, req.body);

        if(!event){
            return res.status(404).json({message: "Event not Found"});
        }

        const updatedEvent = await Event.findById(id);
        res.status(200).json(updatedEvent);

    } catch (error){
        res.status(500).json({message:error.message});
    }
})

//Delete an Event
app.delete('/api/events/:id', async(req,res) => {
    try{
        const { id } = req.params;
        const event = await Event.findByIdAndDelete(id);
        
        if(!event){
            return res.status(404).json({message: "Event not found"});
        }
        res.status(200).json({message: "Event taken down successfully!"});

    } catch(error){
        res.status(500).json({message: error.message});
    }
})


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