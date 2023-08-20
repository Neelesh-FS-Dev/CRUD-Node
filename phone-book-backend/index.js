const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

let phoneBookEntries = [];

app.post("/entries", (req, res) => {
  const newEntry = req.body;
  phoneBookEntries.push(newEntry);
  res.status(201).json(newEntry);
});

app.get("/entries", (req, res) => {
  res.json(phoneBookEntries);
});

app.delete("/entries/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < phoneBookEntries.length) {
    phoneBookEntries.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Entry not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
