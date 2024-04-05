import express from "express";
import "dotenv/config";
import { pageNotFound } from "./errors/pageNotFound";
import { appErrors } from "./errors/appErros";
import { routes } from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.use(pageNotFound);
app.use(appErrors);

app.listen(PORT, () => {
  console.log(`Server is running in Ice Cold ${PORT}`);
});
