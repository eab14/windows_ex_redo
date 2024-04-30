const { EasterEgg } = require("../models");

const eeController = {

    async getAllEaster(req, res) {

        EasterEgg.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err))

    }

}

module.exports = eeController;