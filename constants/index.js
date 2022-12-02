const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, '../.env')});

const csvFilePath='../assets/sample-portfolio.csv'; //--> CSV

//--connection--//
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.0gorvb0.mongodb.net/?retryWrites=true&w=majority`;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


//--Response Objects--//
const okResponse = (code, data) => ({
  "status": "ok",
  "code": code,
  "message": "All Portfolios",
  "data": data
});

const errResponse = (code, err) => ({
  "status": "Internal Server Error",
  "code": 500,
  "message":
  err.message || "Some error occurred while fetching Portfolios",
});

const Response = {
  okResponse: (code, data) => okResponse(code, data),
  errResponse: (code, data) => errResponse(code, data),
}

module.exports = { csvFilePath, uri, connectionParams, Response };