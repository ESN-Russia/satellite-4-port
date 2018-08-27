const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const staticPath = path.join(__dirname, "../build");
app.use(express.static(staticPath));

app.get("/api", (req, res) => res.send("Hello, world"));

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
