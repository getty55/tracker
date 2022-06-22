const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') return next();

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) throw new Error('Authentication failed');

        const decodedToken = jwt.verify(token, 'Ifadogchewsshoeswhoseshoesdoeshechoose?');
        req.currUserData = { userId: decodedToken.userId };
        next();
    } catch (err) {
        res.status(403).json({ message: 'Authentication failed' });
        return;
    }
};