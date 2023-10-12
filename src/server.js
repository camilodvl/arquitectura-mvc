import express from "express";
import {dirname} from 'path';
import path from "path";
import { fileURLToPath } from 'url';


const _dirname = dirname(fileURLToPath(import.meta.url));//ruta del proyecto
const app=express(); //creacion del servidor

//configuracion
app.set('views', path.join(_dirname, 'views')) //se crea views con la ruta de la carpeta

//middlewares
app.use(express.urlencoded({extended: false})); //conofiguracion para los datos de los formularios

//rutas

app.get('/', (req,res)=>{

    res.send(_dirname)
})


//archivos estaticos
app.use(express.static(path.join(_dirname, 'public'))) //se define carpeta de archivos publicos


export default app