(function () {
  "use strict";

  const data = window.__BRAND__ || {};
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  const $ = (sel, scope) => (scope || document).querySelector(sel);
  const $$ = (sel, scope) => Array.from((scope || document).querySelectorAll(sel));
  const escHTML = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  function safe(fn, name) { try { fn(); } catch (e) { console.warn("[" + name + "]", e); } }

  /* ---------------- Mounts ---------------- */

  function mountProcess() {
    const target = $("[data-process]");
    if (!target || target.children.length > 0 || !data.process) return;
    target.innerHTML = data.process.map(p => `
      <div class="process-item">
        <div class="process-step">${escHTML(p.step)}</div>
        <h3>${escHTML(p.title)}</h3>
        <p>${escHTML(p.desc)}</p>
      </div>
    `).join("");
  }

  function mountFaqs() {
    const target = $("[data-faqs]");
    if (!target || target.children.length > 0 || !data.faqs) return;
    target.innerHTML = data.faqs.map((f, i) => `
      <div class="faq-item" data-faq>
        <button class="faq-q" aria-expanded="false" data-faq-toggle>
          <span>${escHTML(f.q)}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path stroke-linecap="round" d="M12 5v14M5 12h14"/></svg>
        </button>
        <div class="faq-a"><p>${escHTML(f.a)}</p></div>
      </div>
    `).join("");
    $$("[data-faq-toggle]", target).forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const answer = $(".faq-a", item);
        const open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
        answer.style.maxHeight = open ? answer.scrollHeight + "px" : "";
      });
    });
  }

  function mountSocial() {
    const target = $("[data-social]");
    if (!target || target.children.length > 0 || !data.social) return;
    const icons = {
      instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
      facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9Z"/></svg>'
    };
    target.innerHTML = Object.keys(data.social).map(k => `
      <a class="social-btn" href="${escHTML(data.social[k])}" target="_blank" rel="noopener" aria-label="${escHTML(k)}">${icons[k] || ""}</a>
    `).join("");
  }

  function mountAddress() {
    const el = $("[data-address]");
    const link = $("[data-address-link]");
    if (el && data.address) el.textContent = data.address;
    if (link && data.mapsUrl) link.href = data.mapsUrl;
  }

  /* ---------------- Reveals ---------------- */

  function initReveals() {
    const items = $$("[data-reveal]");
    if (!items.length) return;
    if (!window.IntersectionObserver) { items.forEach(i => i.classList.add("in-view")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); } });
    }, { threshold: 0.05 });
    items.forEach(i => io.observe(i));
    // Safety net: never leave content invisible if IO stalls (a11y tools,
    // print view, a slow first paint) — content first, animation second.
    setTimeout(() => items.forEach(i => i.classList.add("in-view")), 900);
  }

  function initTilt() {
    if (!fineHover || reduced) return;
    $$("[data-tilt]").forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-6px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  function initHeroParallax() {
    if (reduced || !window.gsap || !window.ScrollTrigger) return;
    const visual = $(".hero-visual");
    if (!visual) return;
    gsap.to(visual, {
      yPercent: 8, ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
    });
  }

  /* ---------------- Before/After slider ---------------- */

  function initTransform() {
    const panel = $("[data-transform]");
    const handle = $("[data-transform-handle]");
    const after = $(".transform-after", panel);
    if (!panel || !handle || !after) return;

    function setPos(pct) {
      pct = Math.max(0, Math.min(100, pct));
      after.style.clipPath = `inset(0 0 0 ${pct}%)`;
      handle.style.left = pct + "%";
      handle.setAttribute("aria-valuenow", String(Math.round(pct)));
    }
    function fromClientX(clientX) {
      const r = panel.getBoundingClientRect();
      setPos(((clientX - r.left) / r.width) * 100);
    }
    let dragging = false;
    handle.addEventListener("pointerdown", (e) => { dragging = true; handle.setPointerCapture(e.pointerId); });
    handle.addEventListener("pointermove", (e) => { if (dragging) fromClientX(e.clientX); });
    handle.addEventListener("pointerup", () => { dragging = false; });
    panel.addEventListener("click", (e) => { if (e.target === handle) return; fromClientX(e.clientX); });
    handle.addEventListener("keydown", (e) => {
      const cur = parseFloat(handle.style.left) || 50;
      if (e.key === "ArrowLeft") setPos(cur - 5);
      if (e.key === "ArrowRight") setPos(cur + 5);
    });
  }

  /* ---------------- AI: fetch helper with demo fallback ---------------- */

  async function callApi(endpoint, payload) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      return await res.json();
    } catch (err) {
      return { ok: false, reason: "network", mode: "demo" };
    }
  }

  /* ---------------- Chat assistant ---------------- */

  function initChat() {
    const fab = $("[data-open-chat]");
    const closeBtns = $$("[data-close-chat]");
    const panel = $("[data-chat-panel]");
    const messages = $("[data-chat-messages]");
    const form = $("[data-chat-form]");
    const input = $("[data-chat-input]");
    const suggestionsWrap = $("[data-chat-suggestions]");
    const modeBadge = $("[data-ai-mode-badge]");
    if (!panel || !form) return;

    let opened = false;
    let history = [];

    function addMsg(role, text) {
      const div = document.createElement("div");
      div.className = "ai-msg " + (role === "user" ? "user" : "bot");
      div.textContent = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
      history.push({ role, text });
      if (history.length > 12) history = history.slice(-12);
    }

    function addTyping() {
      const div = document.createElement("div");
      div.className = "ai-msg bot ai-typing-wrap";
      div.innerHTML = '<span class="ai-typing"><span></span><span></span><span></span></span>';
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
      return div;
    }

    function renderSuggestions() {
      const s = (data.assistant && data.assistant.suggestions) || [];
      suggestionsWrap.innerHTML = s.map(q => `<button type="button" class="ai-suggestion">${escHTML(q)}</button>`).join("");
      $$(".ai-suggestion", suggestionsWrap).forEach(btn => {
        btn.addEventListener("click", () => { input.value = btn.textContent; form.requestSubmit(); });
      });
    }

    function setMode(mode) {
      if (!modeBadge) return;
      if (mode === "live") {
        modeBadge.innerHTML = '<span class="pill-dot"></span>IA conectada';
      } else {
        modeBadge.innerHTML = '<span class="pill-dot"></span>Modo demostración';
      }
    }

    function open() {
      panel.classList.add("is-open");
      if (!opened) {
        opened = true;
        addMsg("bot", (data.assistant && data.assistant.greeting) || "Hola, ¿en qué puedo ayudarte?");
        renderSuggestions();
        setMode("demo");
        callApi("api/estado.php", {}).then(r => setMode(r && r.mode === "live" ? "live" : "demo"));
      }
      input.focus();
    }
    function close() { panel.classList.remove("is-open"); }

    if (fab) fab.addEventListener("click", () => (panel.classList.contains("is-open") ? close() : open()));
    closeBtns.forEach(b => b.addEventListener("click", close));

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      addMsg("user", text);
      input.value = "";
      const typing = addTyping();
      const result = await callApi("api/asistente.php", { message: text, history });
      typing.remove();
      if (result && result.ok) {
        setMode(result.mode);
        addMsg("bot", result.reply);
      } else {
        setMode("demo");
        addMsg("bot", "Ahora mismo no puedo consultar al asistente en directo, pero te dejo una idea general: antes de pedir presupuesto conviene tener claro el tipo de reforma, la superficie y qué te gustaría cambiar. Usa el preparador de solicitud para dejarlo todo listo.");
      }
    });
  }

  /* ---------------- Budget wizard ---------------- */

  function initWizard() {
    const openBtns = $$("[data-open-wizard]");
    const overlay = $("[data-wizard-overlay]");
    if (!overlay) return;
    const closeBtn = $("[data-close-wizard]");
    const body = $("[data-wizard-body]");
    const steps = $$(".wizard-step", body);
    const progressBar = $("[data-wizard-progress]");
    const backBtn = $("[data-wizard-back]");
    const nextBtn = $("[data-wizard-next]");
    const fileList = $("[data-file-list]");

    const answers = { tipo: "", zona: "", superficie: "", plazo: "", descripcion: "", presupuesto: "", nombre: "", email: "", telefono: "", archivosCount: 0 };
    let current = 1;
    const total = steps.length;
    let summaryGenerated = false;

    function show(stepN) {
      current = Math.max(1, Math.min(total, stepN));
      steps.forEach(s => s.classList.toggle("is-active", Number(s.dataset.step) === current));
      progressBar.style.width = (current / total * 100) + "%";
      backBtn.style.visibility = current === 1 ? "hidden" : "visible";
      if (current === total) {
        nextBtn.textContent = "Cerrar";
        if (!summaryGenerated) generateSummary();
      } else if (current === total - 1) {
        nextBtn.textContent = "Generar resumen";
      } else {
        nextBtn.textContent = "Siguiente";
      }
    }

    function open() { overlay.classList.add("is-open"); document.body.style.overflow = "hidden"; show(1); }
    function close() { overlay.classList.remove("is-open"); document.body.style.overflow = ""; }

    openBtns.forEach(b => b.addEventListener("click", open));
    if (closeBtn) closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });

    // Option cards (step 1)
    $$('.option-card', body).forEach(card => {
      card.addEventListener("click", () => {
        const group = card.closest("[data-field]");
        $$('.option-card', group).forEach(c => c.classList.remove("is-selected"));
        card.classList.add("is-selected");
        answers[group.dataset.field] = card.dataset.value;
      });
    });

    // Text/select inputs
    $$("[data-field]", body).forEach(el => {
      if (el.tagName === "DIV") return;
      const key = el.dataset.field;
      el.addEventListener("input", () => { answers[key] = el.value; });
      el.addEventListener("change", () => { answers[key] = el.value; });
    });

    // File input
    const fileInput = $('input[type="file"][data-field="archivos"]', body);
    if (fileInput) {
      fileInput.addEventListener("change", () => {
        answers.archivosCount = fileInput.files.length;
        fileList.innerHTML = Array.from(fileInput.files).map(f => `<span class="file-chip">${escHTML(f.name)}</span>`).join("");
      });
    }

    function showStepError(stepEl, msg) {
      let box = $(".error-box", stepEl);
      if (!box) {
        box = document.createElement("div");
        box.className = "error-box";
        stepEl.appendChild(box);
      }
      box.textContent = msg;
      box.hidden = false;
    }
    function clearStepError(stepEl) {
      const box = $(".error-box", stepEl);
      if (box) box.hidden = true;
    }

    function validateStep(n) {
      const stepEl = steps.find(s => Number(s.dataset.step) === n);
      clearStepError(stepEl);
      if (n === 1 && !answers.tipo) { showStepError(stepEl, "Elige el tipo de reforma para continuar."); return false; }
      if (n === 6 && (!answers.nombre || !answers.email)) { showStepError(stepEl, "Necesito al menos tu nombre y email para preparar el resumen."); return false; }
      return true;
    }

    backBtn.addEventListener("click", () => show(current - 1));
    nextBtn.addEventListener("click", () => {
      if (current === total) { close(); return; }
      if (!validateStep(current)) return;
      show(current + 1);
    });

    function localSummary() {
      const lines = [
        `SOLICITUD DE PRESUPUESTO — PREPARADA CON IA (demo)`,
        `Reformas Manuel Martín · Valencia`,
        ``,
        `Tipo de reforma: ${answers.tipo || "—"}`,
        `Zona / código postal: ${answers.zona || "—"}`,
        `Superficie aproximada: ${answers.superficie ? answers.superficie + " m²" : "—"}`,
        `Plazo deseado: ${answers.plazo || "—"}`,
        `Presupuesto previsto: ${answers.presupuesto || "No indicado"}`,
        `Estado actual y cambios deseados: ${answers.descripcion || "—"}`,
        `Archivos adjuntos: ${answers.archivosCount ? answers.archivosCount + " archivo(s) (no enviados, solo referencia local)" : "Ninguno"}`,
        ``,
        `Contacto: ${answers.nombre || "—"} · ${answers.email || "—"} ${answers.telefono ? "· " + answers.telefono : ""}`,
        ``,
        `Aspectos pendientes de valorar en una visita técnica:`,
        `- Estado real de instalaciones (agua, luz, gas) detrás de paredes y suelos.`,
        `- Viabilidad de mover tabiques o instalaciones según estructura del edificio.`,
        `- Necesidad de permisos o comunicación al ayuntamiento según el alcance final.`,
        `- Medición exacta y elección de materiales y acabados.`,
        ``,
        `Esta es una preparación de la solicitud para valoración profesional, no un presupuesto cerrado. No se ha enviado a ninguna empresa todavía — es información generada localmente en modo demostración.`
      ];
      return lines.join("\n");
    }

    async function generateSummary() {
      summaryGenerated = true;
      const loading = $("[data-summary-loading]", body);
      const errorBox = $("[data-summary-error]", body);
      const output = $("[data-summary-output]", body);
      const actions = $("[data-summary-actions]", body);
      const note = $("[data-summary-note]", body);
      loading.hidden = false; errorBox.hidden = true; output.hidden = true; actions.hidden = true; note.hidden = true;

      const result = await callApi("api/resumen.php", answers);
      loading.hidden = true;
      const text = (result && result.ok && result.resumen) ? result.resumen : localSummary();
      output.value = text;
      output.hidden = false; actions.hidden = false; note.hidden = false;
      window.__lastSummary = text;
    }

    $("[data-copy-summary]", body)?.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText($("[data-summary-output]", body).value); alert("Resumen copiado."); }
      catch (e) { alert("No se pudo copiar automáticamente; selecciona el texto manualmente."); }
    });
    $("[data-download-summary]", body)?.addEventListener("click", () => {
      const blob = new Blob([$("[data-summary-output]", body).value], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "solicitud-reforma-manuel-martin.txt";
      document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(url);
    });
  }

  /* ---------------- Boot ---------------- */

  function boot() {
    safe(mountProcess, "mountProcess");
    safe(mountFaqs, "mountFaqs");
    safe(mountSocial, "mountSocial");
    safe(mountAddress, "mountAddress");
    safe(initReveals, "initReveals");
    safe(initTilt, "initTilt");
    safe(initTransform, "initTransform");
    safe(initChat, "initChat");
    safe(initWizard, "initWizard");

    if (window.gsap && window.ScrollTrigger) {
      try { gsap.registerPlugin(ScrollTrigger); } catch (_) {}
      safe(initHeroParallax, "initHeroParallax");
    }

    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
