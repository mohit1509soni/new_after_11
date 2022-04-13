const bookModel= require("../models/bookModel")

const addBook  = async function(req, res){
    let data = req.body
    let addB = await bookModel.create(data)
    res.send({msg: addB})
}

const getBookData= async function (req, res) {
    let Book= await bookModel.find()
    res.send({msg: Book})
}

module.exports.addBook= addBook
module.exports.getBookData = getBookData