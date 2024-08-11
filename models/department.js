import { DataTypes, Model } from "sequelize";
import sequelize from "../database.js";

class Department extends Model {}

Department.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize }
);

export default Department;
