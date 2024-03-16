const { User } = require('../models');
const { checkUser, jwtOptions } = require('../utils/auth');
const jwt = require('jsonwebtoken');

const userController = {

    getUsers(req, res) {

        User.find({}).lean()
            .then(data => res.json(data))
            .catch(err => res.json(err))

    },

    getUserById({ params }, res) {

        User.findOne({ _id: params.id }).lean()
            .then(data => res.json(data))
            .catch(err => res.json(err))

    },

    postUser({ body }, res) {

        User.create(body)
            .then(data => res.json(data))
            .catch(err => res.json(err))

    },

    editUser({ params, body }, res) {

        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true, save : true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    deleteUser({ params }, res) {

        User.deleteOne({ _id: params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))

    },

    loginUser(req, res) {

        checkUser(req.body)

            .then((user) => {

                let payload = {
                    _id: user._id,
                    username: user.username
                };

                req.session.user = user;

                let token = jwt.sign(payload, jwtOptions.secretOrKey);

                res.json({ message: 'login successful', token: token });

            })

            .catch((msg) => res.status(422).json({ message: msg }));

    },

    logoutUser(req, res) {

        if (req.session.user) req.session.destroy(() => res.status(204).end());
        else res.status(404).end();

    },

    restricted(req, res) {

        res.json('Restricted area, logged in users only...');

    },

}

module.exports = userController;