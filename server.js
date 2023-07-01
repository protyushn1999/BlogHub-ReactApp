// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("./db.json");
// const middlewares = jsonServer.defaults({
//   static: "./build",
// });
// const PORT = process.env.PORT || 9090;
// server.use(middlewares);
// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//   })
// );
// server.use(router);
// server.listen(PORT, () => {
//   console.log("Server is running");
// });

// // Export the Server API
// module.exports = server

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 9090;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/api/*": "/$1"
}));
server.use(router);

module.exports = server;
