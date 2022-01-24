import fastify from "fastify";
import schema from "./schema.json";

const server = fastify();

server.addSchema(schema);

console.log(server.getSchemas());

// Works
server.get("/", {
  handler() {},
  schema: {
    body: {
      type: "array",
      items: { $ref: "Global#/definitions/Works" },
    },
  },
});

// Doesn't work
server.post("/", {
  handler() {},
  schema: {
    body: {
      type: "array",
      items: { $ref: "Global#/definitions/Works" },
    },
  },
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
