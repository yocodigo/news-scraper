var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var mongoose = require("mongoose");
var Article = require("../models/articles.js");
var Comments = require("../models/comments.js");

module.exports = function (app) {

    app.get('/', function (req, res) {
      res.redirect('/articles');
    });
    /*=====================================================================*/
    app.get("/scrape", function(req, res) {
        request("https://www.npr.org/sections/news/", function(req, res, html) {
            var $ = cheerio.load(html);
            
            $(".item-info").each(function(i, element) {
                var result = {};

                result.link = $(this).find("h2.title").find("a").attr("href");
                result.title = $(this).find("h2.title").find("a").text();
                result.summary = $(this).children(".teaser").text();
                
                Article.create(result, function (err, doc) {
                    // Log any errors
                    if (err) {
                      console.log(err// Or log the doc
                      );
                    } else {
                      console.log("Article object created");
                    }
                  });
            });
        });
        res.redirect("/articles");
    });

    /*=====================================================================*/
    app.get("/articles", function(req, res) {
        Article.find({}, function (error, doc) {
            // Log any errors
            if (error) {
              console.log("error")// Or send the doc to the browser as a json objec);
            } else {
              res.render("index", {result: doc});
              console.log(doc);
            }
            //Will sort the articles by most recent (-1 = descending order)
          })
          .sort({'_id': -1});
    });

    app.get("/articles/:id", function(req, res) {
        Article.findOne({_id: req.params.id})
            .populate("link")
            .then(function(dbArticle) {
                res.json(dbArticle);
                console.log(dbArticle);
            })
            .catch(function(err) {
                res.json(err);
            });
    });

    app.post("/comments", function(req, res) {
        Comments.create(req.body)
            .then(function(dbComment) {
                console.log(dbComment);
                return Article.findOneAndUpdate({}, { $push: {comment: savedComment._id}}, {new: true});
            })
            .then(function(dbArticle) {
                res.json(dbArticle);
            })
            .catch(function(err) {
                res.json(err);
                console.log("Error saving comment!");
            });
    });
}//module.export closing brace