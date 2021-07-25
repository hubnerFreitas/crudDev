const { devs } = require('../models');
const Validador = require('../../Validador');
const { restart } = require('nodemon');

class DevController {

  async getAll(req, res){
    const dev = await devs.findAll();
    return res.status(200).json(dev).send();
  }

  async getById(req, res){
    const {id } = req.params;
    const dev = await devs.findByPk(id);
    if(!dev){
      return res.status(404).json({message: "Dev não encontrado."});
    }
    return res.status(200).json(dev).send();
  }

  async create(req, res){
    var message = Validador.ValidaCampos(req.body);

    if(message){
      return res.status(400).json({message: message});
    }

    const dev = devs.create(req.body);
 
    if(dev){
      res.status(200);
      return res.json({message: "Dev inserido com sucesso", dev: dev.nome }).send();
    }
  }

  async update(req, res){
    const {id } = req.params;

    const dev = await devs.findByPk(id);

    if(!dev){
      return res.status(404).json({message: "Dev não encontrado."}).send();
    }

    dev.update(req.body);

    return res.status(200).json({message: "Dev atualizado com sucesso."}).send()

  }

  async delete(req, res){
    const { id } = req.params;

    const dev = await devs.findByPk(id);

    if(!dev){
      return res.status(404).json({message: "Dev não encontrado"});
    }

    await dev.destroy();

    return res.status(200).json({message: "Dev deletado com sucesso!"});
  }

}

module.exports = new DevController();