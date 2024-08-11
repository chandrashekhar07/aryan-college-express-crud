import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";
import departmentRoutes from "./routes/department.js";
import "./models/relation.js";

const app = express();

app.use(cors({ origin: "*" }));

app.use(bodyParser.json());

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);

app.get("/", (req, res) => {
  console.log("[GET ROUTE]");
  res.send("HELLO FROM HOMEPAGE");
});

app.use("/users", userRoutes);
app.use("/departments", departmentRoutes);
