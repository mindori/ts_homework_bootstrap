import * as dotenv from "dotenv";
import express from "express";
import { Sequelize } from "sequelize-typescript";
import { UsersController } from "./controllers/users.controller";

dotenv.config();
const app = express();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  models: [__dirname + "/models"],
});

if (process.env.DB_SYNC === "true") {
  sequelize
    .sync()
    .then(() => console.log("데이터베이스 싱크를 성공하였습니다."))
    .catch((error) =>
      console.log(`데이터베이스 싱크를 실패하였습니다.: ${error}`)
    );
}

app.use(express.json());
app.use("/users", UsersController);
app.use((req, res, next) => {
  res.status(404).send({ message: "Not Found" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
