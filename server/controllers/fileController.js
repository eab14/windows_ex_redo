const { File} = require("../models");

const fileController = {

    async getFiles(req, res) {

        File.find({ user: req.user._id })
            .then(data => res.json(data))
            .catch(err => res.json(err))

    }

}

module.exports = fileController;