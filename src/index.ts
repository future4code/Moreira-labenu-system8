
import {app} from "./app";
import { newEstudante, searchStudante, ChangeEstudante } from "./endpoints/estudantes/newEstudante";
import { filterTurma, newTurma, changeModulo } from "./endpoints/turma/newTurma";

app.get("/turma/active", filterTurma)
app.put("/turma/change", changeModulo)
app.post("/turma/add", newTurma)
app.post("/estudante", newEstudante)
app.get("/estudante", searchStudante)
app.put("/estudante/edit", ChangeEstudante)

