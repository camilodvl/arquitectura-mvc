import Doctor from "../models/Doctor.js"

const doctorController = {};

doctorController.renderDoctor = (req, res) => {
    res.render('doctores')
}

doctorController.renderNew = (req, res) => {
    res.render('new-doctor')
}

doctorController.createNewDoctor = async(req,res) =>{
    const doctor = await Doctor.create(req.body)
    res.render('dcreado')
}


export default doctorController;