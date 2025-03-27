import express from "express";
import cors from "cors";
import routerUsersAPI from "./routes/Users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/Users", routerUsersAPI);

app.listen(3000, () => {
    console.log("Rodando na porta 3000")
});