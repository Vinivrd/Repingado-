const getData = (req, res) => {
    res.json({ message: 'Test backend!' });
};

module.exports = { getData };
