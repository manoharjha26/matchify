const adminAuth = (req, res, next) => {
    const token = 'xyz';
    const isAuthentic = token === 'xyz';
    if (!isAuthentic) {
        res.status(401).send("UnAuthrized");
    } else {
        next();
    }
}

const userAuth = (req, res, next) => {
    const token = 'abcdf';
    const isAuthentic = token === 'abc';
    if (!isAuthentic) {
        res.status(401).send("UnAuthrized")
    } else {
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth,
}