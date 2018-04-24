const express = require('express'); 
const mongoose = require('mongoose'); //new
const Book = require('./models/book.schema'); //new

const app = express(); 
const PORT = process.env.PORT || 5000; 

//--------------Connecting to Mongo Start-----------------//
const databaseUrl = 'mongodb://localhost:27017/library'; //new
mongoose.connect(databaseUrl) //new

mongoose.connection.on('connected', ()=>{
    console.log(`mongoose connected to ${databaseUrl}`);
}); //new

mongoose.connection.on('error', (error) =>{
    console.log('mongoose connection error', error);
    
}); //new
//--------------Connecting to Mongo End-----------------//

//get route for /books
app.get('/books', (req, res) =>{
    //database Read/Find
    Book.find({}) //new
        .then((dataFromDatabase) => {
            //success, good things happened
            console.log('data from database', dataFromDatabase);
            res.send(dataFromDatabase); //originally was res.send(bookCollection);
        })
        .catch((error) =>{
            //error, bad things happened
            console.log('error with Book.find',error);
            res.sendStatus(500);
        });
});



// const bookCollection = [
//     {
//     title: "A Tale of Two Cities",
//     author: "Charles Dickens",
//     edition: 2,
//   },
//   {
//     title: "Murder on the Orient Express",
//     author: "Agatha Christie",
//     edition: 2
//   },
//   {
//     title: "Snow Crash",
//     author: "Neal Steve",
//     edition: 1.2,
//     ratings: [
//       {score: 5},
//       {score: 1}
//     ]
//   },
//   {
//     title: "Catcher in the Rye",
//     author: "Someone",
//     edition: 1,
//     ratings: [
//       {score: 2},
//       {score: 5},
//       {score: 3.5},
//       {score: 4}
//     ]
//    }
// ];         Used this to make sure that the GET works 

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
}); //PORT is which entry way, can be any number between 1 and 9999, it's mostly arbitrary, occasionally it will be horrific