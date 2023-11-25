import { Server } from "socket.io"

const io = new Server('https://chatting-app-socket.onrender.com', {
  cors: {
    origin: "https://chatting-app-client2.onrender.com"
  }
})
let users = [];
const addUser = (userData, socketId) => {
  console.log("accoutnn peremeter", userData);
  !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}
const getUser = (userId) => {
  return users.find(user => user.sub === userId);
}
io.on('connection', (socket) => {
  console.log("user connected");

  //connect
  socket.on("addUser", userData => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
  })

  socket.on('sendMessage',data=>{
    const user = getUser(data.reveiverId);
    io.to(user.socketId).emit('getMessage',data);
  })
})