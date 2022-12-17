const popUpHolder = document.querySelector(".popUp");
const openFormBtn = document.querySelector(".popUpBtn");
const closeFormBtn = document.querySelector(".closeBtn");
const form = document.querySelector(".holder");
const thanksTxt = document.querySelector(".thanks");

openFormBtn.addEventListener("click", openForm);
closeFormBtn.addEventListener("click", closeForm);
form.addEventListener("submit", onSubmitForm);

function closeForm() {
  popUpHolder.classList.remove("active");
}

function openForm() {
  popUpHolder.classList.add("active");
}

function onSubmitForm(e) {
  e.preventDefault();
  thanksTxt.classList.add("active");
  form.classList.remove("active");

  setTimeout(() => {
    closeForm();
    thanksTxt.classList.remove("active");
    form.classList.add("active");
  }, 2000);
}
