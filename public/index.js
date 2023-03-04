const socket = io();

socket.on("connect", () => {
  console.log("Connected to server");
});
//TODO: message handler가 필요함
socket.on("message", data => {
  console.log("data >> ", data);
});

async function createRoom() {
  socket.emit("roomManage", {roomId: "1", memberId: socket.id, type: "createRoom"});
}
async function joinRoom() {
  socket.emit("roomManage", {roomId: "1", memberId: socket.id, type: "joinRoom"});
}
async function leaveRoom() {
  socket.emit("roomManage", {roomId: "1", memberId: socket.id, type: "leaveRoom"});
}
async function deleteRoom() {
  socket.emit("roomManage", {roomId: "1", memberId: socket.id, type: "deleteRoom"});
}

//TODO: Local Video/Audio  - 처리
let audioDevices = [];
let videoDevices = [];
let myStream;
let localVideo;

const constraints = (window.constraints = {
  audio: false,
  video: true,
});

window.onload = () => {
  console.log("page loading ...");
  localVideo = document.getElementById("localVideo");
  init()
};

async function init(e) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
    e.target.disabled = true;
  } catch (e) {
    console.log(e);
  }
}
function handleSuccess(stream) {
  const video = document.querySelector("video");
  const videoTracks = stream.getVideoTracks();
  console.log("Got stream with constraints:", constraints);
  console.log(`Using video device: ${videoTracks[0].label}`);
  window.stream = stream; // make variable available to browser console
  video.srcObject = stream;
}
