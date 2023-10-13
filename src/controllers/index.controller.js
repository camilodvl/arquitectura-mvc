const indexController = {};

indexController.renderIndex = (req, res) => {
    res.render('index')
}

indexController.rendertest = (req, res) => {
    res.render('testing')
}

export default indexController;