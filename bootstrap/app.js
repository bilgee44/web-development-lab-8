"use strict";
const root = document.documentElement;
const btn = document.getElementById("theme-toggle");
const mq = window.matchMedia("(prefers-color-scheme: dark)");
const read = () => { try { return localStorage.getItem("theme"); } catch { return null; } };
const save = (t) => { try { localStorage.setItem("theme", t); } catch { /* ignore */ } };

function apply(theme) {
  root.setAttribute("data-bs-theme", theme);           // Bootstrap 5.3 dark mode
  btn.setAttribute("aria-pressed", String(theme === "dark"));
  btn.textContent = theme === "dark" ? "Гэрэлтэй горим" : "Харанхуй горим";
}
apply(read() || (mq.matches ? "dark" : "light"));
btn.addEventListener("click", () => {
  const next = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  apply(next); save(next);
});

// Form validation
const form = document.getElementById("photo-form");
const ok = document.getElementById("form-ok");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  ok.textContent = "";
  if (form.checkValidity()) { ok.textContent = "Амжилттай илгээгдлээ!"; form.reset(); form.classList.remove("was-validated"); }
  else { form.classList.add("was-validated"); }
});
