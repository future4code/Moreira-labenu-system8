import { Request, Response } from "express"
import connection from "../../data/connection"
import Estudante from "./estudante"

export async function newEstudante(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try { 
        const newEstudante: Estudante = new Estudante(Date.now().toString(), req.body.nome, req.body.email, req.body.data_nasc, req.body.turma_id)
        connection("ESTUDANTE")
       .insert(newEstudante)
       .then(() => { res.status(200).send("Sucess!") })
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    } 
}

export async function searchStudante(
    req:Request,
    res:Response
):Promise<void> {
    let errorCode = 400
    try {
        const result: Estudante[] = await connection("ESTUDANTE")
        .where("nome", "=", req.body.nome)

        res.status(200).send(result)
       
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }   
}

/* export async function ChangeTurma(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try {
       await connection("ESTUDANTE")
       .update({turma_id: req.body.turma_id})
       .where('id',"=", req.body.id)
       .where("nome", "=", req.body.nome) 
 
       res.status(200).send("Sucess")
 
 
     } catch (error:any) {
        res.status(errorCode).send(error.message)
     }
 } */
 export async function ChangeEstudante(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try {

       await connection("ESTUDANTE")
       .update({turma_id: req.body.turma_id})
       .where('id',"=", req.body.id)
 
       res.status(200).send("sucess!!")
 
     } catch (error:any) {
        res.status(errorCode).send(error.message)
     }
 }

/*  .update({modulo: req.body.modulo})
 .where('id', '=', req.body.id)
 */


