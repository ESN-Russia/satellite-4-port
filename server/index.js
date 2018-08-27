import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
