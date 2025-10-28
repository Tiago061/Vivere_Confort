import { AuthService } from "../services/auth.service"
import { Request, Response } from "express";

export default class AuthController {
    private authService: AuthService

    constructor(){
        this.authService = new AuthService()
    }

    async login (req: Request, res: Response) {
        //implementação do Login
        try{
            const result = await this.authService.login(req.body)
            res.status(200).json(result)
        }catch (error) {
            console.error(error);
            return res.status(401).json({ error: 'Internal Server error'})
        }
    }
 
    async signup (req: Request, res: Response) {
        //implementação do Login
        try{
            const user = await this.authService.signup(req.body)
            res.status(201).json(user)
        }catch (error) {
            return res.status(400).json({ error: 'Internal Server error'})
        }
    }

}