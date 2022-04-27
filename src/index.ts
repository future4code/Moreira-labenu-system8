
import {app} from "./app";
import { newDocente, searchDocente, ChangeDocente } from "./endpoints/docentes/newDocente";
import { filterTurma, newTurma, changeModulo } from "./endpoints/turma/newTurma"
import { newEstudante, searchStudante, ChangeEstudante } from "./endpoints/estudantes/newEstudante";


app.get("/docente",searchDocente); 
app.post("/docente", newDocente);
app.put("/docente/edit", ChangeDocente)
app.get("/turma/active", filterTurma)
app.put("/turma/change", changeModulo)
app.post("/turma/add", newTurma)
app.post("/estudante", newEstudante)
app.get("/estudante", searchStudante)
app.put("/estudante/edit", ChangeEstudante)

