import {FastifyInstance} from "fastify";
import fastifyView from "@fastify/view";
import ejs from "ejs";
import fastifySocketIO from "fastify-socket.io";
import statics from "@fastify/static";
import path from "path";

export default async function (fastify: FastifyInstance) {
  fastify.register(fastifyView, {engine: {ejs}});
  fastify.register(statics, {root: path.join(__dirname, "../../../public"), prefix: "/public/", decorateReply: false});
  fastify.register(statics, {root: path.join(__dirname, "../../../public/assets"), prefix: "/assets/", decorateReply: false});

  // fastify-socket.io : https://socket.io/docs/v4/server-initialization/#with-fastify
  fastify.register(fastifySocketIO);
}
