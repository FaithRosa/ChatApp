import { FastifyInstance } from "fastify";

export async function userRoutes(app: FastifyInstance) {
    app.post<{Body: { id: string; name:string}}>("/signup", async, (req, res) => {
        
        const {id, name, image} = req.body
        if(id==null || id==="" || name==null || name==="")

    })
}>