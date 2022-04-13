const express=require('express')
const router = express.Router();
const bookMode= require("../models/bookModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/addBook", UserController.addBook)

router.get("/getBookData", UserController.getBookData)

module.exports = router;