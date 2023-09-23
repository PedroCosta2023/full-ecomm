const fs = require('fs')
const crypto = require('crypto');
const { error } = require('console');

class produtos {
    //criar metodos
    constructor(fileName){
        this.fileName = fileName;

        if (!fileName){
            throw new error("Você informar um nome via arquivo!")
        } try{
            fs.accessSync(this.fileName)
        } catch (error){
            fs.writeFileSync(this.fileName, '[]')
        }
    }

    async getAll(){
        return JSON.parse(await fs.promises.readFile(this.fileName))
    }

    async create(atributos){
        
    }

}