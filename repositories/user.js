const fs = require('fs')
const crypto = require('crypto');

class userRepository {
    //criar metodos
    constructor(fileName) {
        this.fileName = fileName;

        if (!fileName) {
            throw new error("Você informar um nome via arquivo!!")
        }

        try {
            fs.accessSync(this.fileName)
        } catch (error) {
            fs.writeFileSync(this.fileName, '[]')
        }

    }

    async getAll() {

        //abrir arquivo
        //const contents = await fs.promises.readFile(this.fileName)
        //ler arquivo


        //const data = JSON.parse(contents)


        //retornar lista
        //return data; 


        return JSON.parse(await fs.promises.readFile(this.fileName))
    }

    async create(atributos) {
        // adicionar o id ao atributo

        atributos.id = this.ramdomId();

        // ler arquivo 
        const records = await this.getAll()
        //gravar na lista
        records.push(atributos)
        //devolver para o arquivo
        await this.writeAll(records)
    }

    ramdomId() {
        return crypto.randomBytes(4).toString('hex')
    }

    async writeAll(records) {
        return await fs.promises.writeFile(this.fileName, JSON.stringify(records))
    }

    async getOne(id) {
        const records = await this.getAll();
        const searchUser = records.find((records) => records.id === id);

        console.log(searchUser)
    }

    async delete(id) {
        const records = await this.getAll();
        const updateList = records.filter((records) => records.id !== id)
        await this.writeAll(updateList);
    }

    async update(id, atributo) {
        // Pega todos
        const records = await this.getAll();

        //buscar elemento por id
        const toUpdate = records.find((records) => records.id === id);

        Object.assign(toUpdate, atributo);
        await this.writeAll(records);

    }

}

const teste = async () => {
    const repo = new userRepository("user.json")
    //const users = await repo.getAll();

    //await repo.create({nome:"Pimenta", email: "toma@gmail.com"})

    repo.update("b423355d", { "nome": "Pedro Lucas Lucio" });

}

teste()