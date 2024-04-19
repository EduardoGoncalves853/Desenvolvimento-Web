import express from "express";
import { router } from "./routes";
import { appErrors } from "./errors/appErrors";
import { pageNotfoundError } from "./errors/pageNotFoundError";
import "dotenv/config";
import { UPLOADS_FOLDERS } from "./configs/uploadConfig";

const app = express();
const port = process.env.PORT || 3000;

//*.......
app.use(express.json());
app.use("/file", express.static(UPLOADS_FOLDERS));
app.use(router);
//*.......
app.use(pageNotfoundError);
app.use(appErrors);
//*.......

// chamando app.listen(port, [hostname], [backlog], [callback])
app.listen(port, () => {
  console.log(`server is running on PORT ${port}...`);
});
// o Express cria um servidor HTTP interno.
//* ↑ assim que o servidor estiver escutando, a função será chamada.
