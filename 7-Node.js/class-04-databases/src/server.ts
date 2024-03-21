import express from "express";
import { router } from "./routes";
import { Database } from "sqlite";
import { sqliteConnection } from "./databases/sqlite3";
import { runMigrations } from "./databases/sqlite3/migrations";
import { appErros } from "./middlewares/appErrors";

const app = express();
const port = 3000;
app.use(express.json());
app.use(router);
app.use(appErros);

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});

sqliteConnection()
  .then(() => console.log("Database is connected..."))
  .catch((error) => console.error(error));

runMigrations();
