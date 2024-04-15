const { Note } = require("../models");

const noteController = {

    async getNotes(req, res) {

        Note.find({ user: req.user._id })
            .then(data => res.json(data))
            .catch(err => res.json(err))

    },

    async getAllNotes(req, res) {

        const page = parseInt(req.query.page) || 1;
        const limit = 5;

        try {

            const count = await Note.countDocuments();
            const totalPages = Math.ceil(count / limit);
            const skip = (page - 1) * limit;

            const data = await Note.find({}).skip(skip).limit(limit).lean();

            res.json({
                totalPages,
                currentPage: page,
                data
            });

        } catch (err) {

            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });

        }
        
    }

}

module.exports = noteController;