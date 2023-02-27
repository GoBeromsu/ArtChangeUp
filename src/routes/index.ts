import {FastifyInstance} from "fastify";
import signal from "./signal";

export default async function (fastify: FastifyInstance) {
  fastify.register(signal, {prefix: "/signal"});
}
