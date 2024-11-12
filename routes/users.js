const express = require("express");
const addUserValidator = require("./validators/add");
const { getResponseMessage } = require('./responseMessage');

const router = express.Router();

router.post("/add", addUserValidator, getResponseMessage,  function (req, res) {
  try {
    res.send("User registered successfully!");
  } catch (err) {
    const errMsg = typeof err?.message === "string" ? err.message : "";
    return res.status(400).json({ errors: errMsg });
  }
});

module.exports = router;
