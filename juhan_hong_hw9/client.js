const ws = new WebSocket('ws://localhost:8080');
const messagesDiv = document.getElementById('messages');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');

ws.onmessage = (event) => {
  const message = document.createElement('div');
  message.textContent = event.data;
  messagesDiv.appendChild(message);
};

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  ws.send(messageInput.value);
  messageInput.value = '';
});

const username = prompt('Enter your username:') || 'Anonymous';

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = `${username}: ${messageInput.value}`;
  ws.send(message);
  messageInput.value = '';
});