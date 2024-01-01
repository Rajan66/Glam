const admin = require('../config/firebase-config');
const User = require('../models/user')

class Middleware {
    async decodeToken(req, res, next) {
        const token = await req.headers.authorization.split(' ')[1]
        try {
            const decodeValue = await admin.auth().verifyIdToken(token)
            if (decodeValue) {
                req.userId = decodeValue?.uid
                return next()
            }
            return res.json({ message: 'Unauthorized!' })
        } catch (error) {
            return res.json({ message: error.message })
        }
    }

    async checkModerator(req, res, next) {
        const firebaseUID = req.userId
        console.log(req.userId)
        console.log(firebaseUID)
        try {
            const user = await User.findOne({ uid: firebaseUID });
            console.log(user)
            if (user && user.role === 'moderator') {
                // User is a moderator, allow access to the route
                next();
            } else {
                // User is not a moderator, return forbidden error
                return res.status(403).json({ error: 'Access denied. Not a moderator.' });
            }
        } catch (error) {
            console.error('Error checking moderator status:', error);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    }
}

module.exports = new Middleware()