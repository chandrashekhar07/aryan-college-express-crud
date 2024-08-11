import express from "express";
import Department from "../models/department.js";

const router = express.Router();

// Getting the list of users from the mock database
router.get("/", async (req, res) => {
  const departments = await Department.findAll();

  res.send(departments);
});

export default router;
