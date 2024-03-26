const { User } = require('../models');
const bcrypt = require('bcrypt');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: 'secret_test',
};

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {

    (jwt_payload) && 

        next(null, {
            _id: jwt_payload._id,
            username: jwt_payload.username,
            email: jwt_payload.email,
            role: jwt_payload.role,
        });
 
    
    (!jwt_payload) && next(null, false);

});

const userAuth = (req, res, next) => {

    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json('Unauthorized: No token provided');
    } else {
        jwt.verify(token.split(' ')[1], jwtOptions.secretOrKey, (err, decoded) => {
            if (err) {
                console.error('JWT verification error:', err.message);
                return res.status(401).json('Unauthorized: Invalid token');
            } else {
                req.user = decoded;
                next();
            }
        });
    }
    
};

const adminAuth = (req, res, next) => {

    

}

const checkUser = (data) => {

    return new Promise(function (resolve, reject) {

        User.findOne({ email: data.email })
            .then((user) => {

                if (!user) reject("Unable to find email " + data.email);

                else {

                    bcrypt.compare(data.password, user.password).then((res) => {

                        if (res === true) resolve(user);
                        else reject("Incorrect password for email " + data.email);

                    });

                }
                
            })
            
            .catch((err) => reject("Unable to find user " + data.email));

    });

};

module.exports = {
    userAuth,
    checkUser,
    strategy,
    jwtOptions
}