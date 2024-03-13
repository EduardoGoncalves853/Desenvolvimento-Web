
import express from "express";
import { router } from "../routes";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}...`);
});

// middleware => usa comunicação express em JSON para usar em app
app.use(express.json());


app.use(router);
