const { Router } = require('express');
const superheroRouter = Router();
superheroRouter
  .route('/')
  .post(superheroController.create)
  .get(superheroController.getMany);
superheroRouter
  .route('/:superheroId')
  .get(superheroController.getById)
  .put(superheroController.updateById, superheroController.create)
  .delete(superheroController.deleteById);
module.exports = superheroRouter;
