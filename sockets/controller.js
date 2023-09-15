const socketsController = (socket) => {
  console.log("Cliente conectado", socket.id);
  socket.on("disconnect", () => {
    // console.log("Cliente desconectado");
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    const id = 123456789;
    console.log(payload);
    //Enviar desde el back
    callback(payload);
    //Recibe desde front
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = {
  socketsController,
};
