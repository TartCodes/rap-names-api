const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Sheyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },

  "chance the rapper": {
    age: 29,
    birthName: "Chancleor Bennett",
    birthLocation: "Chicago, Illinois",
  },

  dylan: {
    age: 29,
    birthName: "Dylan",
    birthLocation: "Dylan, Dylon",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (req, res) => {
  // the ':' here in express is saying that this is a query param
  const rappersName = req.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    //bracket notation due to spaces in our rappers names
    res.json(rappers[rappersName]);
  } else {
    res.json(rappers["dylan"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  //process.env.PORT will default to heroku port first
  console.log(`The server is running on ${PORT}! You better go catch it! hehe`);
});
