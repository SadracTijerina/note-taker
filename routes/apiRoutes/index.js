const router = require("express").Router();
const fs = require("fs");
const { uuid } = require("uuid");
const path = require("path");

router.get("/notes", (req, res) => {
  let notes = fs.readFileSync("db/db.json", "utf8");

  notes = JSON.parse(notes);

  res.json(notes);
});

router.post("/notes", (req, res) => {
  let data = fs.readFileSync("db/db.json");

  notes = JSON.parse(data);

  const newNote = {
    id: uuid(),
    title: req.body.title,
    text: req.body.text,
  };

  notes.push(newNote);

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes, null, 2)
  );

  res.json(notes);
});

module.exports = router;
