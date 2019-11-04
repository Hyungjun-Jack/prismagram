require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import { Prisma } from "prisma-binding";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: "src/api/generated/prisma.graphql",
      endpoint: "https://us1.prisma.sh/hyungjun-kim-821b70/prismagram/dev"
    })
  })
});
server.express.use(logger("dev"));
server.start({ port: PORT }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
