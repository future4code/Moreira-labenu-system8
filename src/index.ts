import {app} from "./app";
import { newDocente, searchDocente, ChangeDocente } from "./endpoints/docentes/newDocente";
import { filterTurma, newTurma, changeModulo } from "./endpoints/turma/newTurma"


app.get("/docente",searchDocente); 
app.post("/docente", newDocente);
app.put("/docente/edit", ChangeDocente)
app.get("/turma/active", filterTurma)
app.put("/turma/change", changeModulo)
app.post("/turma/add", newTurma)
