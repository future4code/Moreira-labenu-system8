import { Request, Response } from "express";
import { connection } from "../../data/connection";
import { app } from "../../app";



type criarDocente={
    id:number,
    nome:string,
    email:string,
    data_nasc: string,
    turma_id:number,
 }
export const newDoscente = async (req: Request, res: Response) =>{
    let errorCode = 400;
    try{
        
        const input: criarDocente = {
            id: req.body.id,
            nome: req.body.nome,
            email: req.body.email,
            data_nasc :req.body.data_nasc,
            turma_id: req.body.turma_id

        }

        if(!input.id || !input.nome || !input.email || !input.data_nasc){
            errorCode = 422;
            throw new Error( "Preencha os campos corretamente")
        }
  
        await connection.raw(`
            INSERT INTO DOCENTE (id,nome, email, data_nasc, turma_id)
            VALUE(
                '${input.id}',
                '${input.nome}',
                '${input.email}',
                '${input.data_nasc}',
                '${input.turma_id}'
            )

            `)
            res.status(201).send({message:"Docente criado com sucesso"})

    } catch (error:any){
      res.status(errorCode).send({message: error.message});
    }

}
