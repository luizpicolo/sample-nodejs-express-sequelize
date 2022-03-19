var express = require('express');
var router = express.Router();
const { User } = require('../app/models');

//Listar todos
router.get('/', async (req, res) => {
  console.log("Listar")
  const users = await User.findAll();
  res.json(users);
}); 

// Criar
router.post('/', (req, res) => {
  console.log("Criar")
  res.json(req.body.nome)
}); 

//Editar
router.put('/:id', (req, res) => {
  console.log("Editar " + req.params.id)
  res.json(req.body.nome)
}); 

//Deletar
router.delete('/:id', (req, res) => {
  console.log("Deletar " + req.params.id)
  res.json(req.body.nome)
}); 

module.exports = router;
