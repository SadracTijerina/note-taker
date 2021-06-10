const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`API server is now on port ${PORT}`);
});
