import { UsersService } from '../services/users.service';
import {Request, Response } from 'express'


export  class UsersController {

     private usersService: UsersService
    
    constructor(){
        this.usersService = new UsersService()
    }

    async getUsers(_req: Request, res: Response){
         try {
            const users = await this.usersService.getUsers()
            res.json(users)
         } catch (error) {
            console.error(error);
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

     async userCreate(req: Request, res: Response){
         try {
            const newUser = await this.usersService.createUser(req.body)

            if(!newUser){
                return res.status(404).json({ message: 'User not found' })
            }

            return res.status(201).json(newUser);
         } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'Internal Server error'})
         }
    }

    async deleteUser(req: Request<{ id: string}>, res: Response){
         try {
            const { id }= req.params;
            const deleteUser = await this.usersService.deleteUser(id)

            return res.json(deleteUser)
            
         } catch (error) {
           return res.status(500).json({ error: 'Internal Server error'})
         }
    }

     async updateUser(req: Request<{ id: string}>, res: Response){
         try {
            const { id }= req.params;
            const updateUser = await this.usersService.updateUser(id, req.body)

            return res.json(updateUser)
            
         } catch (error) {
           return res.status(500).json({ error: 'Internal Server error'})
         }
    }

     async getUserAddress(req: Request<{ id: string }>, res: Response) {

        const { id } = req.params;
        try {
            
            const userWithAddresses = await this.usersService.getUserAddress(id);
            if (!userWithAddresses) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(userWithAddresses);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}
