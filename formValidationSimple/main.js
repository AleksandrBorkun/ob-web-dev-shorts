const onSubmit = (e) => {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  const errorMsgs = [];

  if (name.length > 20) {
    errorMsgs.push("Name is too long. It should be less then 20 char");
  }

  if (password.length > 20) {
    errorMsgs.push("Password is too long. It should be less then 20 char");
  }

  if (password.length < 5) {
    errorMsgs.push("Password is too shord. It should be longer then 5 char");
  }

  if (errorMsgs.length > 0) {
    e.preventDefault();
    error.innerText = errorMsgs.join("\n");
  }
};
