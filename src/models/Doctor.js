import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({

    cedula: {type: String},
    nombre:{type: String}

})

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor