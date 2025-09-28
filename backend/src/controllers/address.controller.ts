import { AddressService } from "../services/address.service";
import {Request, Response } from 'express'

export class AddressController {

    private addressService: AddressService

    constructor(){
        this.addressService = new AddressService()
    }

    async getAddress(_req: Request, res: Response){
         try{
            const address = await this.addressService.getAddress()
            res.json(address)
        }catch (error) {
             console.error(error);
            res.status(500).json({ error: 'Internal Server error'})
        }
    }

    async getAddressId(req: Request<{ id: string}>, res: Response){
         try{
            const { id } = req.params
            const address = await this.addressService.getAddressId(id)
            res.json(address)
        }catch (error) {
            res.status(500).json({ error: 'Internal Server error'})
        }
    }

    async createAddress(req: Request, res: Response){
         try{
            const { userId, ...data } = req.body // separa userId do resto dos dados
            const newAddress = await this.addressService.createAddress(data, userId)
            res.json(newAddress)
        }catch (error) {
             console.error(error);
            res.status(500).json({ error: 'Internal Server error'})
            console.log(error)
        }
    }

    async updateAddress(req: Request<{ id: string}>, res: Response){
         try{
            const { id } = req.params
            const address = await this.addressService.updateAddress(id, req.body)
            res.json(address)
        }catch (error) {
             console.error(error);
            res.status(500).json({ error: 'Internal Server error'})
        }
    }

     async deleteAddress(req: Request<{ id: string}>, res: Response){
         try{
            const { id } = req.params
            const address = await this.addressService.deleteAddress(id)
            res.json(address)
        }catch (error) {
             console.error(error);
            res.status(500).json({ error: 'Internal Server error'})
        }
    }

}