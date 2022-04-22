import {app} from "./app";
import { newDoscente } from "./endpoints/docentes/newDocente";

app.get("/getall"); 
app.post("/docente", newDoscente)