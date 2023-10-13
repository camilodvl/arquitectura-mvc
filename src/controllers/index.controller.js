const indexController = {};

indexController.renderIndex = (req, res) => {
    res.render('index')
}

indexController.renderNew = (req, res) => {
    res.render('new')
}



export default indexController;