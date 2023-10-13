import express from "express";
import {dirname} from 'path';
import path from "path";
import { fileURLToPath } from 'url';
import {engine} from 'express-handlebars'
import router from "./routes/index.routes.js";


const _dirname = dirname(fileURLToPath(import.meta.url));//ruta del proyecto
const app=express(); //creacion del servidor

//configuracion
app.set('views', path.join(_dirname, 'views'));
app.engine('.hbs', engine({ //se configura el handlebars
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),//donde estan los layout, como cabeceras y footers
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs' //se especifica la extensión de los archivos
}));

app.set('view engine', '.hbs');

//middlewares
app.use(express.urlencoded({extended: false})); //conofiguracion para los datos de los formularios

//rutas

app.use(router)


//archivos estaticos
app.use(express.static(path.join(_dirname, 'public'))) //se define carpeta de archivos publicos


export default app