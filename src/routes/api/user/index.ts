import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
export default async function (fastify: FastifyInstance) {
  fastify.post("/:roomid", async (req: FastifyRequest<{Params: {roomid: number}}>, reply: FastifyReply) => {
    console.log("room >> ", req.params);
    reply.send(req.params.roomid);
  });
}
