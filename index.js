const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Store connected users
const users = new Map();

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("A user connected");

    // User joined handler
    socket.on("userJoined", (username) => {
        users.set(socket.id, {
            username,
            isTyping: false
        });

        // Notify others about new user
        socket.broadcast.emit("userJoined", username);
        
        // Send welcome message to the user
        socket.emit("message", {
            type: "system",
            username: "System",
            message: `Welcome to the chat, ${username}!`
        });
    });

    // Chat message handler
    socket.on("chatMessage", (data) => {
        const user = users.get(socket.id);
        if (user) {
            io.emit("message", {
                type: "user",
                username: user.username,
                message: data.message,
                timestamp: new Date().toISOString()
            });
        }
    });

    // Typing indicators
    socket.on("typing", (username) => {
        socket.broadcast.emit("typing", username);
    });

    socket.on("stopTyping", () => {
        socket.broadcast.emit("stopTyping");
    });

    // User disconnect handler
    socket.on("disconnect", () => {
        const user = users.get(socket.id);
        if (user) {
            io.emit("userLeft", user.username);
            users.delete(socket.id);
        }
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});