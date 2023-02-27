import {FastifyInstance} from "fastify";
import {createRoom, deleteRoom, joinRoom, leaveRoom} from "./roomHandler";

export default async function (fastify: FastifyInstance) {
  fastify.io.on("connection", socket => {
    console.log(`User ${socket.id} connected`);

    socket.on("roomManage", async data => {
      const {roomId, memberId, type} = data;
      let success = false;
      console.log("room Mange 이벤트 발생", roomId, memberId, type);
      switch (type) {
        case "createRoom":
          success = await createRoom(roomId);
          break;
        case "joinRoom":
          success = await joinRoom(socket, roomId, memberId);
          break;
        case "leaveRoom":
          success = await leaveRoom(socket,roomId, memberId);
          break;
        case "deleteRoom":
          success = await deleteRoom(roomId);
          break;
      }

      if (success) {
        socket.emit("roomManageResult", {roomId, success});
      } else {
        socket.emit("roomManageResult", {roomId, success, error: `Failed to ${type}`});
      }
    });
  });
}
