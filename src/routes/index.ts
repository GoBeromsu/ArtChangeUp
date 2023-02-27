import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import api from "./api";
import handler from "./handler";
import pages from "./pages";

export default async function (fastify: FastifyInstance) {
  fastify.register(pages, {prefix: "/"});
  fastify.register(api, {prefix: "/api"});
  fastify.register(handler,{prefix:"/handler"})
}
