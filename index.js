const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const authRoutes = require("./routes/auth/auth")

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"));

app.use("/admin", authRoutes);

app.listen(3000, ()=>{
    console.log("Conectado")
})