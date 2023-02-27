import {KURENTO_URL, SOCKET_URL} from "config/URL";
import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import kurento from "kurento-client";
import io from "socket.io-client";

const kurentoClient = kurento(KURENTO_URL);
const socketIo = io(SOCKET_URL);

export default async function (fastify: FastifyInstance) {
  fastify.get("/", async (req: FastifyRequest, reply: FastifyReply) => {
    socketIo.on("connection", socket => {});
    reply.send("hello signal");
  });
}
