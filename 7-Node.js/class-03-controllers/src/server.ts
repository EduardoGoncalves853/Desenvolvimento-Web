import express from "express";
import { router } from "./routes";
import { appErrors } from "./middlewares/appErrors";
import { pageNotfoundError } from "./middlewares/pageNotFoundError";

const app = express();
const port = 3000;

//*.......
app.use(express.json());
app.use(router);
//*.......
app.use(pageNotfoundError)
app.use(appErrors)
//*.......

// chamando app.listen(port, [hostname], [backlog], [callback])
app.listen(port, () => {
  console.log(`server is running on PORT ${port}...`);
});
// o Express cria um servidor HTTP interno.
//* ↑ assim que o servidor estiver escutando, a função será chamada.
