import express from "express";
import User from "../models/users.js";
import { Op } from "sequelize";
import Department from "../models/department.js";

const router = express.Router();

// Getting the list of users from the mock database
router.get("/", async (req, res) => {
  console.log("query is", req.query);

  const {
    search,
    limit = 10,
    page = 1,
    gender,
    departmentId,
    departmentName,
  } = req.query;

  const offset = (page - 1) * limit;

  let whereCondition = {};

  if (search) {
    whereCondition["firstName"] = {
      [Op.iLike]: `%${search}%`,
    };
  }

  if (gender) {
    whereCondition["gender"] = gender;
  }

  if (departmentId) {
    whereCondition["DepartmentId"] = departmentId;
  }

  const databaseUsers = await User.findAndCountAll({
    where: whereCondition,
    limit: limit,
    offset: offset,
    include: [
      {
        model: Department,
        attributes: ["name", "id"],
        where: departmentName
          ? {
              name: departmentName,
            }
          : {},
        required: true
      },
    ],
  });

  res.send(databaseUsers);
});

router.post("/", async (req, res) => {
  const user = req.body;

  const { username, age, birthday, departmentId } = user;

  if (!departmentId) {
    // throw error that department id is compulsory

    res.send(`Please select department id`);
  }

  const savedUser = await User.create({
    username,
    age,
    birthday,
    DepartmentId: departmentId,
  });

  res.send(`user with id ${savedUser.id} has been added to the Database`);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log("id is", id);

  const dbUser = await User.findByPk(id);

  res.send(dbUser);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await User.destroy({
    where: {
      id,
    },
  });

  res.send(`${id} deleted successfully from database`);
});

export default router;
