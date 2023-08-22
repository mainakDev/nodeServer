getUsers = (req, res, next) => {
    res.status(200).json({message: "list of all users"});
}

module.exports = {
    getUsers
}