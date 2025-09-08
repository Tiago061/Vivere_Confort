import { prisma } from '../utils/prisma';
import { UsersService } from '@/services/users';
import express, { type Application, type Request, type Response } from 'express'


export  class UsersController {

     private usersService: UsersService
    
    constructor(){
        this.usersService = new UsersService
    }

    async getUsers(req: Request, res: Response){
         try {
            const users = await this.usersService.getUsers()
            res.json(users)
         } catch (error) {
            res.status(500).json({ error: 'Internal Server error'})
         }
    }

    async getUserById(req: Request<{ id: string}>, res: Response){
         try {
            const { id }= req.params;
            const user = await this.usersService.getUserById(id)

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.json(user)
            
         } catch (error) {
           return res.status(500).json({ error: 'Internal Server error'})
         }
    }

     async getUserCreate(req: Request, res: Response){
         try {
            const newUser = await this.usersService.createUser(req.body)

            if(!newUser){
                return res.status(404).json({ message: 'User not found' })
            }

            return res.status(201).json(newUser);
         } catch (error) {
            res.status(500).json({ error: 'Internal Server error'})
         }
    }

}
