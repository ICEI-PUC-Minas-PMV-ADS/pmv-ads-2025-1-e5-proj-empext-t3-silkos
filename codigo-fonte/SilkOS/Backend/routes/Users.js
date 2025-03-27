import { PrismaClient } from "@prisma/client";
import express from "express";

const routerUsersAPI = express.Router();
const prisma = new PrismaClient();

routerUsersAPI.post("/", async (req, res) => {
    await prisma.User.create({
        data: {
            email: req.body.email,
            password: req.body.password,
        },
    });

    res.send("Ok");
})

routerUsersAPI.get("/", async (req, res) => {
    const { email } = req.query;

    const user = await prisma.User.findUnique({
        where: {
            email: email,
        },
    });

    if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }

    return res.status(200).json(user.email);
});

export default routerUsersAPI;