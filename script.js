const bubblePanel = document.getElementById('bubblePanel');
const bubbleClose = document.getElementById('bubbleClose');
const bubbleForm = document.getElementById('bubbleForm');
const bubbleInput = document.getElementById('bubbleInput');
const bubbleMessages = document.getElementById('bubbleMessages');
const openChatButton = document.getElementById('open-chat');

let messages = [
  { role: 'agent', text: 'Hello! I can help with event schedules, venue details, and ticket guidance.' }
];

function renderMessages() {
  bubbleMessages.innerHTML = '';
  messages.forEach((message) => {
    const el = document.createElement('div');
    el.className = `message ${message.role}`;
    el.innerHTML = `<p>${escapeHtml(message.text)}</p>`;
    bubbleMessages.appendChild(el);
  });
  bubbleMessages.scrollTop = bubbleMessages.scrollHeight;
}

function toggleBubble(open) {
  const agentBubble = document.getElementById('agentBubble');
  agentBubble.classList.toggle('open', open);
  bubblePanel.setAttribute('aria-hidden', String(!open));
  if (open) {
    bubbleInput.focus();
  }
}

function showChat() {
  toggleBubble(true);
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[char]);
}

function getAgentResponse(prompt) {
  const lowered = prompt.toLowerCase();
  if (/(ticket|tickets|book|booking)/.test(lowered)) {
    return 'Tickets can be booked via the official portal, with premium seating and hospitality packages available for select events.';
  }
  if (/(schedule|time|when|date)/.test(lowered)) {
    return 'The next highlight is the Qatar Cup Football Final on 2 May 2026; full schedules are available in the Events section.';
  }
  if (/(venue|location|where)/.test(lowered)) {
    return 'Matches are hosted at Doha Arena and Lusail Stadium. Transport includes metro, shuttle and dedicated event buses.';
  }
  if (/(athlete|team|qatar)/.test(lowered)) {
    return 'Qatar’s athletes compete across multiple sports, supported by national programs and community training initiatives.';
  }
  return 'I can help with event details, venue access, tickets and athlete programs. Ask me anything about the Olympic experience.';
}

bubbleForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = bubbleInput.value.trim();
  if (!text) return;
  messages.push({ role: 'user', text });
  renderMessages();
  bubbleInput.value = '';

  setTimeout(() => {
    const response = getAgentResponse(text);
    messages.push({ role: 'agent', text: response });
    renderMessages();
  }, 700);
});

openChatButton.addEventListener('click', () => toggleBubble(true));
bubbleClose.addEventListener('click', () => toggleBubble(false));

renderMessages();
