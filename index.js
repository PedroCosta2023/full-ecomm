const express = require("express");

const app = express();

const bodyParser = require("body-parser")



app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send(`    <div>
    <form action="" method="POST">
        <input name="email" placeholder="email">
        <input name="senha" placeholder="senha">
        <input name="confirmSenha" placeholder="confirmSenha">
        <button>Cadastrar</button>
    </form>
</div>`)
})

app.post('/', (req,res)=>{
    console.log(req.body)
    res.send("Foi meu fih")
})


app.listen(3000, ()=>{
    console.log("Conectado")
})