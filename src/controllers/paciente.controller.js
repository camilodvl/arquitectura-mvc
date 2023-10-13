import Paciente from "../models/Paciente.js"

const pacienteController = {};

pacienteController.renderPaciente = (req, res) => {
    res.render('pacientes')
}

pacienteController.renderNew = (req, res) => {
    res.render('new-paciente')
}

pacienteController.createNewPaciente = async(req,res) =>{
    const paciente = await Paciente.create(req.body)
    res.render('pcreado')
}



export default pacienteController;