const express = require("express");
const cors = require("cors");
const { socketsController } = require("../sockets/controller");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);

    this.pahts = {};
    //Middlewares
    this.middlewares();
    //Rutas de mi aplicacion
    this.routes();
    // Sockets
    this.sockets();
  }

  async conectionDb() {
    await dbConnection();
  }

  middlewares() {
    //Cors
    this.app.use(cors());
    //Directori publico
    this.app.use(express.static("public"));
  }

  routes() {}

  async sockets() {
    this.io.on("connection", socketsController );
  }

  listen() {
    this.server.listen(this.port);
    // this.app.listen(this.port);
  }
}

module.exports = Server;
