

Overview
--------

A modern, real-time chat application built with Node.js, Express, and Socket.IO. This application provides a clean, responsive interface for users to communicate in real-time with features like typing indicators, theme switching, and user notifications.

🚀 Features
-----------

### Core Features

*   **Real-time messaging** - Instant message delivery using WebSocket connections
    
*   **User presence** - See when users join and leave the chat
    
*   **Typing indicators** - Visual feedback when someone is typing
    
*   **Theme switching** - Toggle between light and dark themes
    
*   **Responsive design** - Works seamlessly on desktop and mobile devices
    
*   **Message timestamps** - Track when messages were sent
    
*   **Online status indicators** - Visual indicators for active users
    

### User Experience

*   **Username prompt** - Users set their display name on joining
    
*   **System notifications** - Welcome messages and join/leave notifications
    
*   **Auto-scroll** - Chat automatically scrolls to show latest messages
    
*   **Enter key support** - Send messages with Enter key
    
*   **Message differentiation** - Different styling for own vs. other messages
    

# 💬 Real-Time Chat App

A modern, real-time chat application built with **Node.js**, **Express**, and **Socket.IO**. It features a clean, responsive UI and interactive real-time communication functionalities like typing indicators, theme switching, and user notifications.



## 🚀 Features

### 🧩 Core
- **Real-time Messaging** – Powered by WebSockets for instant message delivery.
- **User Presence** – Shows when users join or leave.
- **Typing Indicators** – Know when someone is typing.
- **Theme Switching** – Toggle between light and dark modes.
- **Responsive Design** – Mobile and desktop-friendly.
- **Message Timestamps** – Know exactly when messages were sent.
- **Online Status Indicators** – Visual cues for active users.

### 🎯 User Experience
- Prompt to enter username on join.
- System messages for join/leave events.
- Auto-scrolls to the latest message.
- Send messages with `Enter` key.
- Separate styles for your own vs. others' messages.

---

## 🛠 Technical Stack

| Component              | Technology       | Version     |
|------------------------|------------------|-------------|
| Backend                | Node.js          | Latest      |
| Web Framework          | Express          | ^4.21.2     |
| Real-time Communication| Socket.IO        | ^4.8.1      |
| Frontend               | Vanilla JS (ES6+) | –          |
| Styling                | CSS3 (Custom)    | –           |
| Icons                  | Font Awesome     | 6.0.0       |
| Package Manager        | pnpm             | 10.6.3      |

---
📁 Project Structure
--------------------
<img width="289" height="128" alt="image" src="https://github.com/user-attachments/assets/8859cf75-bd44-4d64-881b-0d9b558f1e18" />


## 🔧 Installation & Setup
-----------------------

### 📦 Prerequisites

- Node.js v14+
- [pnpm](https://pnpm.io/) (recommended) or npm
    

### Installation Steps

```bash
git clone https://github.com/14kartiksingh/chatapp.git
cd chatapp
```
# Install dependencies
```
pnpm install
# or
npm install
```
# Start the server
```
pnpm start
# or
npm start
   ``` 
4.  **Access the application** Open your browser and navigate to http://localhost:3000
    

🔌 Socket.IO Events
-------------------

### Client → Server Events

| Event         | Payload               | Description        |
| ------------- | --------------------- | ------------------ |
| `userJoined`  | `username: string`    | New user joins     |
| `chatMessage` | `{username, message}` | Message sent       |
| `typing`      | `username: string`    | User starts typing |
| `stopTyping`  | `none`                | User stops typing  |
| `disconnect`  | `none`                | User disconnects   |


### Server → Client Events

| Event        | Payload                                | Description           |
| ------------ | -------------------------------------- | --------------------- |
| `message`    | `{type, username, message, timestamp}` | New chat message      |
| `userJoined` | `username: string`                     | Someone joined        |
| `userLeft`   | `username: string`                     | Someone left          |
| `typing`     | `username: string`                     | Typing indicator      |
| `stopTyping` | `none`                                 | Stop typing indicator |


🎨 UI/UX Features
-----------------

### Theme System

*   **Light Theme**: Clean, bright interface with blue accents
    
*   **Dark Theme**: Modern dark interface with blue highlights
    
*   **CSS Variables**: Consistent theming using CSS custom properties
    
*   **Smooth Transitions**: Animated theme switching
    

### Responsive Design

*   **Mobile-first approach**: Optimized for mobile devices
    
*   **Breakpoint**: 480px for mobile layout adjustments
    
*   **Flexible layout**: Adapts to different screen sizes
    

### Message Styling

*   **Own messages**: Blue background, aligned right
    
*   **Other messages**: Gray background, aligned left
    
*   **System messages**: Centered, muted color
    
*   **Animations**: Smooth slide-in effect for new messages
 
  🔄 Application Flow

<img width="350" height="723" alt="image" src="https://github.com/user-attachments/assets/468771e5-7986-4b7a-b7ec-49ec4e3904fa" />


📊 Architecture Overview

<img width="800" height="652" alt="image" src="https://github.com/user-attachments/assets/f5fb72a0-3616-46a7-adbb-fa90bc9b21e6" />

🚦 API Events Reference
-----------------------

### Connection Flow

1.  **User Connection**: Client establishes WebSocket connection
    
2.  **User Registration**: Client sends username via userJoined event
    
3.  **User Storage**: Server stores user data in Map
    
4.  **Welcome Message**: Server sends welcome message to new user
    
5.  **Broadcast Join**: Server notifies other users of new participant
    

### Message Flow

1.  **Message Input**: User types in input field
    
2.  **Typing Indicator**: Client sends typing event
    
3.  **Message Send**: User submits message via chatMessage event
    
4.  **Server Broadcast**: Server sends message to all connected clients
    
5.  **Message Display**: All clients receive and display the message
    

🔒 Security Considerations
--------------------------

### Current Implementation

*   **CORS enabled**: Allows cross-origin requests
    
*   **No authentication**: Basic username system
    
*   **No message validation**: Messages are broadcasted as-is
    
*   **No rate limiting**: No protection against message spam
    

### Recommendations for Production

*   Implement user authentication
    
*   Add message validation and sanitization
    
*   Implement rate limiting
    
*   Add message history persistence
    
*   Add user roles and permissions
    

🎯 Performance Features
-----------------------

*   **Efficient DOM manipulation**: Minimal DOM updates
    
*   **Memory management**: Users are cleaned up on disconnect
    
*   **Event debouncing**: Typing indicators use timeout to prevent spam
    
*   **Auto-scroll optimization**: Smooth scrolling to latest messages
    

🧪 Testing the Application
--------------------------

### Manual Testing Scenarios

1.  **Single User Test**
    
    *   Open browser, enter username
        
    *   Verify welcome message appears
        
    *   Send messages, verify they appear correctly
        
2.  **Multiple User Test**
    
    *   Open multiple browser tabs/windows
        
    *   Use different usernames
        
    *   Verify messages sync across all instances
        
    *   Test typing indicators
        
    *   Test join/leave notifications
        
3.  **Theme Toggle Test**
    
    *   Switch between light and dark themes
        
    *   Verify all elements update correctly
        
4.  **Mobile Responsiveness Test**
    
    *   Test on mobile devices
        
    *   Verify layout adapts properly
        
    *   Test touch interactions
        

📈 Future Enhancements
----------------------

### Planned Features

*    Message history persistence
    
*    User authentication system
    
*    Private messaging
    
*    File sharing capabilities
    
*    Emoji support
    
*    Message reactions
    
*    User profiles with avatars
    
*    Room/channel system
    
*    Message search functionality
    
*    Push notifications
    

### Technical Improvements

*    Database integration (MongoDB/PostgreSQL)
    
*    Redis for session management
    
*    Docker containerization
    
*    Automated testing suite
    
*    CI/CD pipeline
    
*    Error handling improvements
    
*    Logging system
    
*    Performance monitoring
    

🐛 Known Issues
---------------

*   No message persistence (messages lost on server restart)
    
*   No user authentication
    
*   No protection against XSS attacks
    
*   No message history limit (potential memory issues)
    
*   No offline message support
    

🤝 Contributing
---------------

To contribute to this project:

1.  Fork the repository
    
2.  Create a feature branch
    
3.  Make your changes
    
4.  Test thoroughly
    
5.  Submit a pull request
    

📝 License
----------

This project is licensed under the MIT License.
