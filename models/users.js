import { DataTypes, Model } from "sequelize";
import sequelize from "../database.js";

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstName: DataTypes.STRING,
    birthday: DataTypes.DATE,
    age: DataTypes.INTEGER,
    gender: {
      type: DataTypes.ENUM,
      values: ["male", "female", "other"],
      defaultValue: "other",
    },
  },
  { sequelize }
);

export default User;
