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

module.exports.addImage = async (req, res, next) => {
  const {
    file,
    params: { superheroId },
  } = req;
  try {
    const superheroUpdate = await Superhero.findByPk(superheroId);
    if (superheroUpdate) {
      superheroUpdate.images.push(file.filename);
      const [updatedRow, [updatedSuperheroes]] = await Superhero.update(
        superheroUpdate.get(),
        {
          where: { id: superheroId },
          returning: true,
        }
      );
      return res.status(200).send({ data: updatedSuperheroes });
    }
    res.status(404).send('Not found');
  } catch (err) {
    next(err);
  }
};
