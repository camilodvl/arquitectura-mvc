import app from "./server.js"
import {getConnection} from './db.js'

getConnection();
app.listen(8080, ()=>{
    console.log("Server on port 8080")
})