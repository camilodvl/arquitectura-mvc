import mongoose from "mongoose";

const pacienteSchema = mongoose.Schema({

    cedula: {type: String},
    nombre:{type: String}

})

const Paciente = mongoose.model('Paciente', pacienteSchema);

export default Paciente