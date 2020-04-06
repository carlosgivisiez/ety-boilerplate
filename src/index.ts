import "reflect-metadata";

import Compress from "compression";
import BodyParser from "body-parser";
import Morgan from "morgan";
import Dotenv from "dotenv";

import { Server } from "@overnightjs/core";

class ServerApp extends Server {
    constructor() {
        super();

        this.setupDependencyInjection();
        this.setupConfigurations();
        this.setupControllers();
    }

    // e.g Register your interface implementations for DI
    private setupDependencyInjection(): void {
        return;
    }

    // Configure your services middlewares
    private setupConfigurations(): void {
        this.app.use(Morgan("combined"));
        this.app.use(BodyParser.json());
        this.app.use(BodyParser.urlencoded({ extended: true }));
        this.app.use(Compress());
    }

    // Setup your controller using overnightjs
    private setupControllers(): void {
        return;
    }

    public start(port: number): void {
        this.app.listen(port, (): void => {
            console.log("Server listening on port " + port + "!");
        });
    }
}

try {
    Dotenv.config();

    const server: ServerApp = new ServerApp();
    server.start(Number(process.env.PORT) || 3000);
} catch (e) {
    console.log(e);
}
