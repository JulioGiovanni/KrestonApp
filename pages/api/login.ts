
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
//login endpoint
const login = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
    const { correo, contrasena } = req.body;
    const user = await prisma.usuario.findUnique({
        where: {
        correo,
        },
    });
    if (!user) {
        return res.status(401).json({ message: 'Correo inválido ' });
    }
    if (user?.contrasena !== contrasena) {
        return res.status(401).json({ message: 'Contraseña inválida' });
    }
    return res.status(200).json({ message: 'Login exitoso', user });
}

export default login;