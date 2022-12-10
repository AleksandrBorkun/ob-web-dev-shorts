const express = require("express");
const app = express();

app.use(express.json());

const port = 3000;

let friends = [];

app.get("/", (req, res) => {
  res.json({ friends });
});

app.post("/", (req, res) => {
  if (req.body.name) {
    friends.push(req.body.name);
    res.json({ status: `${req.body.name} is your friend now` });
  } else {
    res.json({
      status: `Some data is missing: ${JSON.stringify({
        name: "",
      })}`,
    });
  }
});

app.put("/", (req, res) => {
  const { oldName, newName } = req.body;

  if (oldName && newName) {
    const index = friends.findIndex((friendName) => friendName === oldName);
    friends[index] = newName;
    res.json({ status: `${oldName} renamed to ${newName}` });
  } else {
    res.json({
      status: `Some data is missing: ${JSON.stringify({
        oldName: oldName || "",
        newName: newName || "",
      })}`,
    });
  }
});

app.delete("/", (req, res) => {
  const { name } = req.body;
  friends = friends.filter((it) => it !== name);

  res.json({ status: `${name} is not your friend anymore` });
});

app.listen(port, () => {
  console.log("APP listening on port 3000");
});
