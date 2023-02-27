import {Socket} from "socket.io";

export enum roomType {
  joinRoom = "joinRoom",
  leaveRoom = "leaveRoom",
  deleteRoom = "deleteRoom",
  createRoom = "createRoom",
}
export interface Room {
  id: string;
  members: Set<string>;
}
