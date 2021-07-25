const routes = require('express').Router();

const DevController = require('./app/controllers/DevController')

routes.post('/create', DevController.create)

routes.put('/update/:id', DevController.update)

routes.get('/getAll', DevController.getAll);
routes.get('/getById/:id', DevController.getById);
routes.delete('/delete/:id', DevController.delete);

module.exports = routes;