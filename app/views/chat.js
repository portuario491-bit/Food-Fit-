const { page, escapeHtml } = require('./layout');

function initials(name) {
  return (name || '?').trim().charAt(0).toUpperCase();
}

function messageBubble(m, myId) {
  const mine = String(m.from_id) === String(myId);
  return `
  <div class="msg-row ${mine ? 'mine' : 'theirs'}">
    <div class="msg-bubble">${escapeHtml(m.body)}</div>
  </div>`;
}

function renderChat({ user, other, otherPhotoId, messages }) {
  const body = `
  <div class="card chat-card">
    <div class="chat-header">
      ${otherPhotoId
        ? `<a href="/fotos/${otherPhotoId}" target="_blank" rel="noopener" title="Ver foto en grande"><img class="person-avatar" src="/fotos/${otherPhotoId}" alt="${escapeHtml(other.name)}"></a>`
        : `<div class="person-avatar">${initials(other.name)}</div>`}
      <div>
        <b>${escapeHtml(other.name)}</b>
        <div class="summary-sub" style="margin:0;">Chat abierto porque BlueHeart os recomienda como compatibles.</div>
      </div>
      <a class="btn ghost" style="margin-left:auto;" href="/matches/${other.id}">Ver compatibilidad</a>
    </div>

    <div class="chat-messages">
      ${messages.length
        ? messages.map((m) => messageBubble(m, user.id)).join('')
        : `<div class="empty-state"><div class="big">💬</div>Todavía no os habéis escrito. ¡Empieza la conversación!</div>`}
    </div>

    <form method="POST" action="/chat/${other.id}" class="chat-form">
      <textarea name="body" maxlength="2000" required placeholder="Escribe un mensaje..."></textarea>
      <button class="btn" type="submit">Enviar</button>
    </form>

    <div class="disclaimer" style="margin-top:16px;">
      Este chat es interno del piloto de BlueHeart (Bloque 7.19) — trátalo con el mismo respeto que cualquier conversación real. Puedes dejar de hablar con alguien cuando quieras.
    </div>
  </div>`;

  return page({ title: `Chat con ${other.name}`, user, activeNav: 'chat', body });
}

function conversationRow(c) {
  const preview = c.last_body.length > 60 ? c.last_body.slice(0, 60) + '…' : c.last_body;
  return `
  <a class="person-card" href="/chat/${c.other_id}">
    <div class="person-avatar">${initials(c.other_name)}</div>
    <div class="person-info">
      <b>${escapeHtml(c.other_name)}</b>
      <span>${escapeHtml(preview)}</span>
    </div>
  </a>`;
}

function renderConversationList({ user, conversations }) {
  const body = `
  <div class="card">
    <div class="summary-title">Mensajes</div>
    <div class="summary-sub">Conversaciones con las personas con las que tienes match.</div>
    ${conversations.length
      ? `<div class="match-grid">${conversations.map(conversationRow).join('')}</div>`
      : `<div class="empty-state"><div class="big">💬</div>Todavía no tienes ninguna conversación. Entra en una compatibilidad recomendada para empezar a hablar.</div>`}
  </div>`;
  return page({ title: 'Mensajes', user, activeNav: 'chat', body });
}

module.exports = { renderChat, renderConversationList };
