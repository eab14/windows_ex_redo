const { User } = require('../models');
const { checkUser, jwtOptions } = require('../utils/auth');
const jwt = require('jsonwebtoken');
const { removeAt } = require('../utils/helpers');

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

        User.create({ username: removeAt(body.email), email: body.email, password: body.password })
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

                const expiresIn = '1h';

                let payload = {
                    _id: user._id,
                    username: user.username,
                    email: user.email
                };

                let token = jwt.sign(payload, jwtOptions.secretOrKey, { expiresIn });

                res.json({ message: 'login successful', email: user.email, token: token });

            })

            .catch((msg) => res.status(422).json({ message: msg }));

    },

    verifyUser(req, res) {

        res.json(req.user);

    },

    logoutUser(req, res) {

        if (req.user) { delete req.user; console.log(req.user); req.logout(() =>  res.status(204).end()); }
        else res.status(404).end();

    },

    restricted(req, res) {

        res.json('Restricted area, logged in users only...');

    },

}

module.exports = userController;