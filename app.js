const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require('mongoose')


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//-------------------------------------------------


mongoose.connect('mongodb://localhost:27017/wikidb',{useNewUrlParser: true}, { useUnifiedTopology: true },{useCreateIndex: true})

const articleSchema = new mongoose.Schema({
    item : String,
    content : String
})

const Article = mongoose.model("Article", articleSchema)



app.get('/articles', function(req,res){
    Article.find(function(err, docs){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})














app.listen(3000, function() {
    console.log("Server started on port 6000");
  });
  


