import { prisma } from "../utils/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

export class AuthService {
    async login(data:{ email: string, password: string,  }): Promise<{ user: Omit<User, 'password'>; token: string }> {
        // Lógica de autenticação
        const user = await prisma.user.findUnique({ where: { email: data.email } });
        if(!user) throw new Error("User not found");

        const isPasswordValid = await bcrypt.compare(data.password, user.password);
        if(!isPasswordValid) throw new Error("Invalid password");

        // Geração de token JWT
        const JWT_SECRET: string = process.env.JWT_SECRET || ''
        if (!JWT_SECRET) throw new Error('JWT_SECRET não definido')

        const token = jwt.sign({ userId: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1h' })
        
         const { password, ...userWithoutPassword } = user;

        return { user: userWithoutPassword, token };
    }

    async signup(data: { firstName: string; lastName: string; age: number; email: string; cpf: string; password: string, role?: string; }): Promise<Omit<User, 'password'>>{

          const existingUser = await prisma.user.findFirst({
            where: {
            OR: [{ email: data.email }, { cpf: data.cpf }]
            }
        })

        if (existingUser) {
            throw new Error('Usuário já cadastrado com este e-mail ou CPF.')
        }

        const hashedPassword = await bcrypt.hash(data.password, 10)
        const newUser = await prisma.user.create({
            data:{
                ...data,
                password: hashedPassword,
                role: data.role || "USER",
            }
        })

        const { password, ...userWithoutPassword } = newUser
        return userWithoutPassword
    }


}