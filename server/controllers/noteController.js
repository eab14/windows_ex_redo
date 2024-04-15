const { Note } = require("../models");

const noteController = {

    async getAllNotes(req, res) {

        try {

            const data = await Note.find({}).lean();
            res.json(data);

        } catch (err) {

            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });

        }
        
    }

}

module.exports = noteController;