import {Express, Request, Response} from "express";
import * as path from "path";	

export class Server {
    private app: Express;

    constructor(app: Express) {
        this.app = app;
        
        this.app.get("/api", (req: Request, res: Response): void => {
            res.send("You have reached the API!");
        });

        this.app.get("*", (req: Request, res: Response): void => {
          res.sendFile(path.resolve("./") + "/frontend/build/index.html");
      });

    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}