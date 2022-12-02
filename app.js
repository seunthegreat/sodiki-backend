const express = require("express");
const connection = require("./connection");
const router = require("./router");
// const router = require("./router");
const cors = require("cors");

var corsOptions = {
  optionsSuccessStatus: 200 //--> For legacy browser support
}

const app = express();
app.use(cors(corsOptions)); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
  
app.use(router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
});

