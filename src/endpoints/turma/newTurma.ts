import { Request, Response } from "express"
import connection from "../../data/connection"
import turma from "./turma"

export async function newTurma(
    req: Request,
    res: Response
    ) :Promise<void>{
        let errorCode = 400
        try {
            const newTurma: turma = new turma
            (Date.now().toString(), 
            req.body.nome, req.body.modulo)
            connection("TURMA")
            .insert(newTurma)
            .then(() => {
                res.status(200).send("Sucess!")
            })
        } catch (error: any) {
            res.status(errorCode).send(error.message)
        }   
}

export async function filterTurma(
    req: Request,
    res: Response
    ) :Promise<void>{
        let errorCode = 400
        try {
            const result: turma[] = await connection("TURMA")
            .where('modulo', '!=', '0')

            res.status(200).send(result)
           
        } catch (error: any) {
            res.status(errorCode).send(error.message)
        }   
}

export async function changeModulo(
    req: Request,
    res: Response
    ) :Promise<void>{
        let errorCode = 400
        try {
            await connection("TURMA")
            .update({modulo: req.body.modulo})
            .where('id', '=', req.body.id)

            res.status(200).send("Sucess")
           
        } catch (error: any) {
            res.status(errorCode).send(error.message)
        }   

}


