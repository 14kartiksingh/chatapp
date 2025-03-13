const socket = io();
let isTyping = false;
let lastTypingTime = 0;
const TYPING_TIMEOUT = 3000;

// Get username
const username = prompt("Enter your name:") || "Anonymous";
socket.emit("userJoined", username);

// Theme handling
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.className = 'fas fa-moon';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.className = 'fas fa-sun';
    }
}

// Message handling
function createMessageElement(data, isMyMessage = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isMyMessage ? 'my-message' : 'other-message'}`;
    
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    messageDiv.innerHTML = `
        ${!isMyMessage ? `<div class="online-status"></div><strong>${data.username}</strong>` : ''}
        <div>${data.message}</div>
        <div class="timestamp">${timestamp}</div>
    `;
    return messageDiv;
}

// Handle incoming messages
socket.on("message", (data) => {
    const messagesList = document.getElementById("messages");
    const isMyMessage = data.username === username;
    const messageElement = createMessageElement(data, isMyMessage);
    messagesList.appendChild(messageElement);
    scrollToBottom();
});

// Typing indicator
function handleTyping() {
    const now = Date.now();
    if (!isTyping) {
        isTyping = true;
        socket.emit('typing', username);
    }
    lastTypingTime = now;
    setTimeout(() => {
        if (now - lastTypingTime >= TYPING_TIMEOUT) {
            isTyping = false;
            socket.emit('stopTyping');
        }
    }, TYPING_TIMEOUT);
}

socket.on('typing', (username) => {
    const typingIndicator = document.getElementById('typingIndicator');
    typingIndicator.style.display = 'block';
    typingIndicator.textContent = `${username} is typing...`;
});

socket.on('stopTyping', () => {
    document.getElementById('typingIndicator').style.display = 'none';
});

// Send message
function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value.trim();
    
    if (message) {
        socket.emit("chatMessage", {
            username,
            message
        });
        input.value = "";
        socket.emit('stopTyping');
    }
    input.focus();
}

// User join/leave notifications
socket.on('userJoined', (username) => {
    const systemMessage = document.createElement('div');
    systemMessage.className = 'system-message';
    systemMessage.textContent = `${username} has joined the chat!`;
    document.getElementById("messages").appendChild(systemMessage);
    scrollToBottom();
});

socket.on('userLeft', (username) => {
    const systemMessage = document.createElement('div');
    systemMessage.className = 'system-message';
    systemMessage.textContent = `${username} has left the chat`;
    document.getElementById("messages").appendChild(systemMessage);
    scrollToBottom();
});

// Utility functions
function scrollToBottom() {
    const chatBox = document.getElementById("messages");
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Enter key handling
document.getElementById("messageInput").addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});