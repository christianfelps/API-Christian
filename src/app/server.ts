import app from './app'
import { AppDataSource } from './database/dataSource'

class Server{
    private server = app;
    private appDataSource = new AppDataSource();

    async run(port: number): Promise<void | Error> {
        try{
            await this.appDataSource.iniciar()
            console.log("Banco conectado com sucesso")
            this.server.listen(port, () => console.log("server running at http://localhost:3000"));
            ;
            }catch(error){
                console.error("error running the server ", error)
                         }
          }
}



const server = new Server;

server.run(3000)

// const server = app;
// try{
//     server.listen(3000);
//     console.log("server running at http://localhost:3000");
// }catch(error){
//     console.error("error running the server ", error)
// }

