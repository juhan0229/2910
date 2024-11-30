# Reflections

## Security Vulnerabilities
1. Lack of authentication: Any user can connect to the WebSocket server without verifying identity. As of right now, i can enter any username and it will accept it without any password. 
2. Lack of encryption: Messages are sent in plaintext when using ws:// (instead of wss://). In the website, it mentioned using wss:// protocol. Unsure why it says to always prefer wss:// but the guide was entirely on ws://..?
3. XSS Risks: Injected JavaScript in chat messages could be executed if not sanitized.

## What I Learned
This exercise provided me with valuable insights into the following areas:

### 1. **Implementing WebSocket Communication for Real-Time Applications**
- I learned how WebSockets enable full-duplex communication between the client and server, which is essential for real-time applications like chat systems. 
- Understanding the process of establishing a WebSocket connection through the `WebSocket` API and handling events like `onmessage`, `onopen`, and `onclose` deepened my appreciation for how WebSockets differ from traditional HTTP requests.
- The exercise showed me how WebSockets can reduce latency and overhead compared to polling or long-polling techniques, making them ideal for scenarios where quick and frequent data updates are required.

### 2. **Securing WebSocket Servers to Prevent Unauthorized Access**
- I explored how important it is to implement security mechanisms for WebSocket communication. For example:
  - **Authentication**: Ensuring only authorized users can establish a connection by integrating token-based or session-based authentication during the WebSocket handshake.
  - **Data Encryption**: Understanding the significance of using `wss://` (WebSocket Secure) over `ws://` to encrypt data in transit, protecting against eavesdropping and man-in-the-middle attacks.
  - **Validation**: Realizing the need to validate incoming messages to guard against injection attacks and unexpected payloads.
- This highlighted the critical role of WebSocket security in modern applications and made me aware of common vulnerabilities to address in real-world projects.

### 3. **Using Node.js to Handle WebSocket Connections and Broadcast Messages**
- I gained hands-on experience in setting up a WebSocket server using Node.js, including initializing a server with libraries like `ws` and integrating it with existing HTTP infrastructure.
- I learned how to efficiently manage multiple WebSocket connections, including:
  - **Broadcasting Messages**: Sending a message from one client to all connected clients, which is fundamental to multi-user chat functionality.
  - **Connection Management**: Handling the lifecycle of WebSocket connections (opening, active communication, and closure) and maintaining proper resource cleanup to avoid memory leaks.
- Through debugging and testing, I understood how Node.js's asynchronous and event-driven nature makes it an excellent platform for building scalable WebSocket-based applications.
