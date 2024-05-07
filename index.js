const Fastify = require("fastify");
const server = Fastify();

server.register(require("@fastify/http-proxy"), {
  upstream: "https://outred.org",
  prefix: "/",
  http2: false,
});

server.listen({ host: "0.0.0.0" }, () => {
  console.log("erm, what the sigma");
});

module.exports = server; // Export the server for potential future use
