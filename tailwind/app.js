"use strict";
const root = document.documentElement;
const btn = document.getElementById("theme-toggle");
const mq = window.matchMedia("(prefers-color-scheme: dark)");
const read = () => { try { return localStorage.getItem("theme"); } catch { return null; } };
const save = (t) => { try { localStorage.setItem("theme", t); } catch { /* ignore */ } };

function apply(theme) {
  root.classList.toggle("dark", theme === "dark");       // @custom-variant dark
  btn.setAttribute("aria-pressed", String(theme === "dark"));
  btn.textContent = theme === "dark" ? "Гэрэлтэй горим" : "Харанхуй горим";
}
apply(read() || (mq.matches ? "dark" : "light"));
btn.addEventListener("click", () => {
  const next = root.classList.contains("dark") ? "light" : "dark";
  apply(next); save(next);
});

// Form: браузерийн native validation + Tailwind-ийн user-invalid: загвар
const form = document.getElementById("photo-form");
const ok = document.getElementById("form-ok");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  ok.textContent = "Амжилттай илгээгдлээ!";
  form.reset();
});
