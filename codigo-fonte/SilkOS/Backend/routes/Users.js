import { PrismaClient } from "@prisma/client";
import express from "express";
import nodemailer from "nodemailer";

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
});

routerUsersAPI.post("/sendEmail", async (req, res) => {
    const { to } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "",
            pass: "",
        },
    });

    try {
        await transporter.sendMail({
            from: '"SilkOS Systems" <email>',
            to,
            subject: "Recuperção de senha",
            html: `Clique nesse link para redefinir sua senha: `,
        });

        res.status(200).json({ message: "Email enviado com sucesso!" });
    } catch (e) {
        res.status(500).json({ error: "Erro ao enviar email: " + e.message });
    }
});

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
