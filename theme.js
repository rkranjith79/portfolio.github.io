(function () {
  var KEY = "portfolio-theme";

  function applyDark(dark) {
    document.documentElement.classList.toggle("dark", dark);
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}

  var dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyDark(dark);

  function setLabel(btn) {
    if (!btn) return;
    btn.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
  }

  setLabel(document.getElementById("themeToggle"));

  var btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var isDark = !document.documentElement.classList.contains("dark");
      applyDark(isDark);
      setLabel(btn);
      try { localStorage.setItem(KEY, isDark ? "dark" : "light"); } catch (e) {}
    });
  }
})();