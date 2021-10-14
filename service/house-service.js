const House = require('../models/House');

const create = ({ name, type, year, city, homeImage, description, availablePieces, }, _owner) => House.create({ name, type, year, city, homeImage, description, availablePieces, _owner });

const getAll = () => House.find().lean();

module.exports = {
    create,
    getAll,
}