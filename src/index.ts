import Fastify, {FastifyInstance} from "fastify";
import {Server, IncomingMessage, ServerResponse} from "http";
import routes from "@routes/index";

const PORT: number = Number(process.env.PORT) || 4000;
const fastify: FastifyInstance<Server, IncomingMessage, ServerResponse> = Fastify();

routes(fastify);

async function start() {
  try {
    await fastify.listen({port: PORT, host: "0.0.0.0"});
    console.log(`server start! http://127.0.0.1:${PORT}/`);
  } catch (err: any) {
    // logger.error(`server loading error... ${err}`);
    console.log(`server loading error ... ${err}`);
    process.exit(1);
  }
}

start();
