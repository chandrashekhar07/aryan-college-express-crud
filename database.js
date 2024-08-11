import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  username: "postgres",
  password: "password",
  host: "localhost",
  database: "aryan",
  port: 54322,
});

(async () => {
  await sequelize.sync({ alter: true });
})();

export default sequelize;
