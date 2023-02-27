import {FastifyInstance} from "fastify";
import register from "./register";
export default async function (fastify: FastifyInstance) {
  register(fastify);
}
