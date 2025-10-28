import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JWTPayload{
    id: string
    email: string
    role: string
}

export function authenticateToken(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token) return res.status(401).json({message: 'Token not provided'})

    try{
        const JWT_SECRET = process.env.JWT_SECRET || "";
        const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
        next();
    }catch{
         return res.status(403).json({ error: "Token inválido ou expirado" });
    }

}

export function authorizeAdmin(req: Request, res: Response, next: NextFunction) {
  const user = (req as any).user;
  if (user?.role !== "ADMIN") {
    return res.status(403).json({ error: "Acesso restrito a administradores" });
  }
  next();
}