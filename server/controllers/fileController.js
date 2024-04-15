const { File } = require("../models");

const fileController = {

    async getFiles(req, res) {

        File.find({ user: req.user._id })
            .then(data => res.json(data))
            .catch(err => res.json(err))

    },

    async getAllFiles(req, res) {

        try {

            const data = await File.find({}).lean();
            res.json(data);

        } catch (err) {

            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });

        }
        
    }

}

module.exports = fileController;