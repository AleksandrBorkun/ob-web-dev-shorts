function onSphereClick() {
  const triangle = document.getElementsByClassName("arrow-up")[0];
  const h3 = document.getElementsByClassName("answer")[0];
  h3.classList.remove("display");
  triangle.classList.add("display");

  setTimeout(() => {
    const num = Math.random();
    h3.innerText = num > 0.5 ? "yes" : "no!";
    h3.classList.add("display");
  }, 1000);
}
