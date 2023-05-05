const express = require("express");
const cors = require("cors");
const { post } = require("./database/index.js"); //lehna importyt schema elli exportyt ha mel index.js li fl folder database
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 4000;

app.post("/diary", (req, res) => {

  post.create(req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


app.get("/posts", (req, res) => {
  post.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.send(result);
    }
  });
});
app.delete("/api/:id", (req, res) => {
  post.deleteOne({ _id: req.params.id }, (err, result) => { // _id , khater ki yjini f data yjini akeka
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


    app.delete('/api/:id', (req, res) => {
      post.deleteOne({_id:req.params.id}, (err, result) => {

        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }

      })
    })

    app.put(`/api/update/:id`, (req, res) => {
      console.log(req.body);
      post.updateOne({ _id: req.params.id }, req.body, (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      });
    });


    app.listen(PORT,()=>{
        console.log(`server connected to localhost:${PORT}`)
    })
    

    // line 1 , 2 , 4 , 5 , 6 , 7 and line 65 ,66,67 hedhom mte3 lexpress ; sna3et behom  l server