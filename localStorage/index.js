const header = document.getElementById("count");
header.innerHTML = localStorage.getItem("count") || 0;

function addNum() {
  const current = parseInt(header.innerText);
  header.innerText = current + 1;

  localStorage.setItem("count", current + 1);
}
