import {app} from "./app";
import { filterTurma, newTurma, changeModulo } from "./endpoints/turma/newTurma";

app.get("/turma/active", filterTurma)
app.put("/turma/change", changeModulo)
app.post("/turma/add", newTurma)
