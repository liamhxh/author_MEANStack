let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let mongoose = require('mongoose')
let app = express()
app.use(bodyParser.json())
app.use(express.static(__dirname + "/client/dist"))

mongoose.connect('mongodb://localhost/authors')

let authorSchema = new mongoose.Schema({
    name: {type : String},
    quotes: [],
}, {timestamps:true})

let Author = mongoose.model('author', authorSchema)


app.get('/authors', function (req, res) {
    Author.find({}, function (err, data) {
        if (err) {
            res.json({
                error: err
            })
        } else {
            res.json({
                db: data
            })
        }
    })
})


app.post('/authors', function (req, res) {
    let author = new Author({
        name: req.body.name,
    })
    author.save(function (err, results) {
        if (err) {
            res.json({
                error: err
            })
        } else {
            res.json({success: results})
        }
    })
})

app.get('/authors/:id', function (req, res) {
    Author.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.json({
                message: 'something is wrong with the ID',
                error: err
            })
        } else {
            res.json(data)
        }
    })
})

app.put('/authors/:id', function (req, res) {
    // let author = {};
    // author.name = req.body.name;
    // author.quotes = req.body.newQuote.quote
    Author.update({_id:req.params.id}, req.body, function(err, data){
        if(err){
            res.json({error:err})
        }else{
            res.json({success:data})
        }
    })
})

app.delete('/authors/:id', function (req, res) {
    Author.findByIdAndRemove({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.json({error:err})
        } else {
            res.json({success:data})
        }
    })
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve('./client/dist/index.html'))
})

app.listen(8000)