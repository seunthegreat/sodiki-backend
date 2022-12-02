const router = require("express").Router();
const { getAllPortfolios } = require("./controllers/portfolioController");

router.get("/getAllPortfolios", getAllPortfolios);

module.exports = router;