const { Message } = require('../models');

const messageController = {

    async getMessages(req, res) {

        Message.find({ $or: [ { sender: req.user._id }, { recipients: req.user._id } ] })
            .then(data => res.json(data))
            .catch(err => res.json(err))

    }

}

module.exports = messageController;