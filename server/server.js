const express = require('express'); //translated: go to the node module folder, find express and run the code
const bodyParser = require('body-parser');
const app = express(); //the thing that was exported from express above, now run it
const PORT = process.env.PORT || 5000; //the first one is for deployment on Heroku, all caps cause it won't change


app.get('/books', (req, res) =>{
    res.send(bookCollection);
})

const bookCollection = [
    {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    edition: 2,
  },
  {
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    edition: 2
  },
  {
    title: "Snow Crash",
    author: "Neal Steve",
    edition: 1.2,
    ratings: [
      {score: 5},
      {score: 1}
    ]
  },
  {
    title: "Catcher in the Rye",
    author: "Someone",
    edition: 1,
    ratings: [
      {score: 2},
      {score: 5},
      {score: 3.5},
      {score: 4}
    ]
   }
];

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
}); //PORT is which entry way, can be any number between 1 and 9999, it's mostly arbitrary, occasionally it will be horrific