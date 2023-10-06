const express = require('express')
const router = express.Router()
const cadastro = require("../../views/admin/cadastro")
const login = require("../../views/admin/login")

const userRepo = require("../../repositories/user")

router.get("/cadastrar", function (req, res) {
    res.send(cadastro())
})

router.post("/cadastrar",async function (req, res) {
    await userRepo.create(req.body)
    res.send("TUDO CERTO")
})

router.get("/login", function (req, res) {
    res.send(login())
})

module.exports = router