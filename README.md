Chat App Documentation
======================

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
    

🛠 Technical Stack
------------------

**ComponentTechnologyVersionBackend**Node.jsLatest**Web Framework**Express^4.21.2**Real-time Communication**Socket.IO^4.8.1**Frontend**Vanilla JavaScriptES6+**Styling**CSS3Custom styles**Icons**Font Awesome6.0.0**Package Manager**pnpm10.6.3

📁 Project Structure
--------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   chatapp/  ├── index.js                 # Main server file  ├── package.json            # Dependencies and scripts  ├── pnpm-lock.yaml         # Lock file for dependencies  ├── README.md              # Basic project info  └── public/                # Static files      ├── index.html         # Main HTML file      ├── script.js          # Client-side JavaScript      └── style.css          # Additional CSS (unused)   `

🔧 Installation & Setup
-----------------------

### Prerequisites

*   Node.js (v14 or higher)
    
*   pnpm (recommended) or npm
    

### Installation Steps

1.  git clone https://github.com/14kartiksingh/chatapp.gitcd chatapp
    
2.  pnpm install# ornpm install
    
3.  pnpm start# ornpm start
    
4.  **Access the application** Open your browser and navigate to http://localhost:3000
    

🔌 Socket.IO Events
-------------------

### Client → Server Events

**EventPayloadDescription**userJoinedusername: stringUser joins the chatchatMessage{username: string, message: string}User sends a messagetypingusername: stringUser starts typingstopTypingnoneUser stops typingdisconnectnoneUser disconnects

### Server → Client Events

**EventPayloadDescription**message{type: string, username: string, message: string, timestamp?: string}New message receiveduserJoinedusername: stringAnother user joineduserLeftusername: stringUser left the chattypingusername: stringSomeone is typingstopTypingnoneStop typing indicator

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
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML

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

This project is licensed under the ISC License.
