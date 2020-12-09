
module.exports = (req, res, next) => {
    try {
        // validation...
        next()
    } catch (error) {
        res.status(401).json({ message: "Authentication failed!" })
    }
}