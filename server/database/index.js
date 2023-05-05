const mongoose = require("mongoose"); // 3ayat lel library mte3 l mongoose
mongoose
  .connect("mongodb+srv://root:root@cluster0.fkaxvra.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("database connected"))
  .catch((err) => console.log(err));
  
  // lehne  l connection mtea l mongoose https://mongoosejs.com/docs/connections.html

let postSchema = mongoose.Schema({
    username:{type:String,require:true},
    date:{type:String},
    imageUrl:{type:String,require:true},
    
    content:{type:String,require :true,},
    
    

}); // hne sna3et e schema mte3i

let save = (repo) => {
  Repo.create(repo).then(
    console.log(repo,'created')
  ).catch(err=>console.log(err))
  
}; //savit ha schema mtea3i

let post = mongoose.model("posts", postSchema); // sna3et model b ch najem nesta3mlou fl requests

module.exports = {post}; // exportit l ppost bch  n3aytelha fl index.js mtea requests ;khater l post  heyya li feha schema mtea3i kifeh dji
