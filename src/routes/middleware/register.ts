import {FastifyInstance} from "fastify";
import fastifyView from "@fastify/view";
import ejs from "ejs";
import fastifySocketIO from "fastify-socket.io";

export default async function (fastify: FastifyInstance) {
  fastify.register(fastifyView, {engine: {ejs}});

  // fastify-socket.io : https://socket.io/docs/v4/server-initialization/#with-fastify
  fastify.register(fastifySocketIO);
}
