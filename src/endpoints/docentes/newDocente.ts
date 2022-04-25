import { Request, Response } from "express";
import { connection } from "../../data/connection";
import Docente from "./docente"


 //Criar docente

 export async function newDocente(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try { 
        const newDocente: Docente = new Docente(Date.now().toString(), req.body.nome, req.body.email, req.body.data_nasc, req.body.turma_id)
        connection("DOCENTE")
       .insert(newDocente)
       .then(() => { res.status(200).send("Sucess!") })
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    } 
}

//Buscar todos docentes

export async function searchDocente(
    req:Request,
    res:Response
):Promise<void> {
    let errorCode = 400
    try {
        const result: Docente[] = await connection("DOCENTE")
        .where("nome", "=", req.body.nome)

        res.status(200).send(result)
       
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }   
}



//Mudar docente de turma

export async function ChangeDocente(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try {

       await connection("DOCENTE")
       .update({turma_id: req.body.turma_id})
       .where('nome',"=", req.body.nome)
 
       res.status(200).send("sucess!!")
 
     } catch (error:any) {
        res.status(errorCode).send(error.message)
     }
 }
