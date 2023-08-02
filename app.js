//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: "secrets.env"});

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
mongoose.connect(process.env.URL);

const articleSchema = {
    title: String,
    content: String
  };

const Article = mongoose.model("Article", articleSchema);

app.route("/articles")

    .get(async (req, res) => {
        Article.find().exec()
            .then( articles => {res.send(articles);})
            .catch(err => {res.send(err)});
    })

    .post(async (req, res) => {

        const article = new Article({
            title: req.body.title,
            content: req.body.content
        });

        article.save()
            .then(() => res.send("article has been saved"))
            .catch(err => res.send(err));
    })

    .delete(async (req, res) =>{
        Article.deleteMany().exec()
            .then(() => res.send("Items have been deleted."))
            .catch(err => res.send(err));
    });


app.route("/articles/:articleID")

    .get(async (req, res) => {
        Article.findOne({_id: req.params.articleID}).exec()
            .then(article => res.send(article))
            .catch(err => res.send(err));
    })

    .put(async (req, res) => {
        Article.updateOne(
            {_id: req.params.articleID}, 
            {title:  req.body.title, content: req.body.content}, 
            {overwrite: true}
        )
            .then(res.send("Updated!"))
            .catch(err => res.send(err));
    })

    .patch(async (req, res) => {
        Article.updateOne(
            {_id: req.params.articleID}, 
            {$set: req.body}
        )
            .then(res.send("Updated!"))
            .catch(err => res.send(err));
    })

    .delete(async (req, res) =>{
        Article.deleteOne({_id: req.params.articleID}).exec()
            .then(() => res.send("Item has been deleted."))
            .catch(err => res.send(err));
    });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});