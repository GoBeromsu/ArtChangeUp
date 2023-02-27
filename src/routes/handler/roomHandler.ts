import {FastifyInstance} from "fastify";
import {Socket} from "socket.io";
import {Room} from "./constants";

const rooms = new Map<string, Room>();

//TODO: DB에 방을 저장 해야 함
export async function createRoom(roomId: string) {
  if (!rooms.has(roomId)) {
    const room = {id: roomId, members: new Set<string>()};
    rooms.set(roomId, room);
    console.log(`Created room ${roomId}`);
    return true;
  } else {
    console.log(`Room ${roomId} already exists`);
    return false;
  }
}
//TODO: 유저 들어오면 room에 추가하고, broadcasting 해야 함
//FIXME: 어차피 memberId가 socketId랑 같아서 그냥 socket 객체로 받는게 어떤가?, 물론 Room 수정해야 함
export async function joinRoom(socket: Socket, roomId: string, memberId: string) {
  const room = rooms.get(roomId);
  if (room) {
    room.members.add(memberId);
    console.log(`Member ${memberId} joined room ${roomId}`);
    socket.join(roomId);
    // 기존에 방에 있던 유저
    socket.to(roomId).emit("message", {id: socket.id});
    // 지금 들어온 유저
    socket.emit("welcome", {id: socket.id});
    return true;
  } else {
    console.log(`Room ${roomId} does not exist`);
    return false;
  }
}

export async function leaveRoom(socket: Socket, roomId: string, memberId: string) {
  const room = rooms.get(roomId);
  if (room) {
    room.members.delete(memberId);
    socket.leave(room.id);
    console.log(`Member ${memberId} left room ${roomId}`);
    // 방에 유저가 없으면, 방을 삭제 한다.
    if (room.members.size === 0) {
      deleteRoom(roomId);
    }
    return true;
  } else {
    console.log(`Room ${roomId} does not exist`);
    return false;
  }
}

export async function deleteRoom(roomId: string) {
  const deleted = rooms.delete(roomId);
  if (deleted) {
    console.log(`Room ${roomId} deleted`);
    return true;
  } else {
    console.log(`Room ${roomId} does not exist`);
    return false;
  }
}
