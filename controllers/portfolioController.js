const Portfolio  = require("../models/portfolio");
const { Response } = require("../constants");
const { okResponse, errResponse } = Response;

const getAllPortfolios = async (req, res) => {
  try{
    let portfolios = await Portfolio.find();
    res.send(okResponse(200, portfolios));
  }catch (err) {
    res.send(errResponse(500, err))
  }
}

module.exports = { getAllPortfolios }