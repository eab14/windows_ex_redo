const { User } = require('../models');
const bcrypt = require('bcrypt');
const passportJWT = require('passport-jwt');

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: '&0y7$noP#5rt99&GB%Pz7j2b1vkzaB0RKs%^N^0zOP89NT04mPuaM!&G8cbNZOtH',
};

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {

    if (jwt_payload) {

        next(null, {
            _id: jwt_payload._id,
            username: jwt_payload.username,
            role: jwt_payload.role,
        });

    } else {
        next(null, false);
    }
});

const withAuth = (req, res, next) => {

    if (req.session.user) { next(); } 
    else { res.status(401).json('You are not logged in'); }

}

const userAuth = (req, res, next) => {

}

const checkUser = (data) => {

    return new Promise(function (resolve, reject) {

        User.find({ username: data.username })
            .limit(1)
            .exec()
            .then((users) => {

                if (users.length == 0) reject("Unable to find user " + data.username);

                else {

                    bcrypt.compare(data.password, users[0].password).then((res) => {

                        if (res === true) resolve(users[0]);
                        else reject("Incorrect password for user " + data.username);

                    });

                }
                
            })
            
            .catch((err) => reject("Unable to find user " + data.username));

    });

};

module.exports = { 
    withAuth,
    userAuth,
    checkUser,
    strategy,
    jwtOptions
}