import mongoose from "mongoose";
import { Schema } from "mongoose";

const citaSchema = mongoose.Schema({
  fecha: { type: String },
  paciente: {
    type: Schema.Types.ObjectId,
    ref: "Paciente",
    required: false,
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
    required: false,
  },
  observaciones: {
    type: String,
  },
  medicamentos: { 
    type: String },
});

const Doctor = mongoose.model("Cita", citaSchema);

export default Doctor;
