import express, { Express, Request , Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());


type criarDocente={
   id:number,
   nome:string,
   email:string,
   data_nasc: string,
   turma_id:number,
}

app.post("/docente", async (req: Request, res: Response) =>{
    let errorCode = 400;
    try{
        
        const input: criarDocente= {
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

});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
