const express = require("express");
const { addTransaction, getALLTransaction } = require("../controllers/transactionController");

const router = express.Router();

router.post("/add-Transaction", addTransaction);

router.get("/get-transaction", getALLTransaction);

module.exports = router;