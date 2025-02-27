// import the express
const express = require('express');
// import the mongodb
const mongoose = require('mongoose');
const authRoute = require('./route/auth');
// define the port number for server
const PORT = 3000;
// create instnace of an express application -> starting point
const app = express();
// MongoDB String
const DB = ('mongodb+srv://hanminthaw:hanminthaw1590@cluster0.skqgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
mongoose.connect(DB).then(()=>{
    console.log('MongoDB is connected');
});
app.use(express.json());
app.use(authRoute);
//start the server and listen on the specified port
app.listen(PORT, "0.0.0.0", function(){
    // log the number
    console.log(`Server is running on port ${PORT}`);
})