import {FastifyReply} from "fastify";
import fastify, {FastifyInstance, FastifyRequest} from "fastify";

export default async function (fastify: FastifyInstance) {
  fastify.get("/", (req: FastifyRequest, reply: FastifyReply) => {
    reply.view("/public/index.ejs");
  });
}
