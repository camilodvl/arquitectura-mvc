import Cita from "../models/Cita.js"
import Doctor from "../models/Doctor.js"
import Paciente from "../models/Paciente.js"


const indexController = {};

indexController.renderIndex = async(req, res) => {
    const citas = await Cita.find()
    .populate('paciente')
    .populate('doctor')
    .lean()
    
    res.render('index', {citas})
}

indexController.renderNew = (req, res) => {
    res.render('new')
}

indexController.saveCita = async(req,res)=>{
    //const cita = await Cita.create(req.body)
    const paciente = await Paciente.findOne({cedula: req.body.paciente})
    const doctor = await Doctor.findOne({cedula: req.body.doctor})
    const cita = await Cita.create({
        fecha: req.body.fecha,
        paciente: paciente._id,
        doctor: doctor._id,
        observaciones: req.body.observaciones,
        medicamentos: req.body.medicamentos

    })
    res.render('index')
}



export default indexController;