const addFriendForm = document.getElementById("addFriend");
const removeFriendForm = document.getElementById("removeFriend");

addFriendForm.addEventListener("submit", addFriend);
removeFriendForm.addEventListener("submit", removeFriend);

function writeFriend(name) {
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(name));
  li.setAttribute("name", name);
  ul.appendChild(li);
}

function deleteFriend(name) {
  const li = document.getElementsByName(name)[0];
  li.remove();
}

function addFriend(e) {
  e.preventDefault();
  const name = e.target.newFriend;
  writeFriend(name.value);
  axios
    .post("http://localhost:3000/", { name: name.value })
    .then((_) => (name.value = ""));
}

function removeFriend(e) {
  e.preventDefault();
  const name = e.target.notFriend;
  deleteFriend(name.value);
  axios
    .delete("http://localhost:3000/", { data: { name: name.value } })
    .then((_) => (name.value = ""));
}

function getFriends() {
  return axios("http://localhost:3000/").then((resp) => resp.data);
}

getFriends().then((resp) => resp.friends.forEach((name) => writeFriend(name)));
