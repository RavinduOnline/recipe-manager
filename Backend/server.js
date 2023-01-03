
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const port = process.env.PORT || "8000";   
const dbUrl = "mongodb+srv://Code94:Code94123456789@recipecluster.0qgpj7j.mongodb.net/?retryWrites=true&w=majority";


//import routes
require("./models/recipe")




//DB Connection
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🥘 DB is Connected"))
  .catch((err) => console.log("🔥 DB Connection has error -> ",err));



//Middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(require("./routes/recipe"));



// Routes
app.get("/", (req, res, next) =>{
    res.send("<h1>❤️ Recipe Manager Backend</br> Developed By <a href='https://ravindurasanga.web.app/'>Ravindu Rasanga</a></h1>");
    next();
});
 
app.use(cors());     

app.listen(port, () =>{
    console.log(`🚀 Server is UP and running on PORT ${port }`)
});
