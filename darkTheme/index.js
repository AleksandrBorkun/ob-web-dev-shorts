function changeTheme(event) {
  const isDark = event.target.getAttribute("dark-mode") === "true";

  if (isDark) {
    document.documentElement.setAttribute("data-theme", "light");
    event.target.setAttribute("dark-mode", "false");
  } else {
    event.target.setAttribute("dark-mode", "true");
    document.documentElement.setAttribute("data-theme", "dark");
  }
}
