const { Superhero } = require('./../models');

module.exports.create = async (req, res, next) => {
  const { body } = req;
  try {
    const createdHero = await Superhero.create(body);
    if (createdHero) {
      return res.status(201).send({ data: createdHero });
    }
    res.status(400).send('Bad request');
  } catch (err) {
    next(err);
  }
};
module.exports.getMany = async (req, res, next) => {};
module.exports.getById = async (req, res, next) => {};
module.exports.updateById = async (req, res, next) => {};
module.exports.deleteById = async (req, res, next) => {};
