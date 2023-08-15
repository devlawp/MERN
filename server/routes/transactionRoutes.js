const express = require("express");
const { addTransaction, getALLTransaction } = require("../controllers/transactionController");

const router = express.Router();

router.post("/add-Transaction", addTransaction);

router.post("/get-transaction", getALLTransaction);

module.exports = router;