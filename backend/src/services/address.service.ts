import { AddressDto } from '../dtos/address.dto';
import { prisma } from '../utils/prisma';


export class AddressService{
    
    async getAddress(){
        return await prisma.address.findMany()
    }

    async getAddressId(id: string){
        return await prisma.address.findUnique({
            where: {id}
        })
    }

    async createAddress(data: AddressDto){
        return await prisma.address.create({
            data: {
                street: data.street,
                number: data.number,
                city: data.city,
                state: data.state,
                zipCode: data.zipCode,
                neighborhood: data.neighborhood,
                country: data.country,
                user: {
                    connect: { id: "id-user" }
                }
            }
        })
    }

    async updateAddress(id: string, data: AddressDto){
        return await prisma.address.update({
            where: { id },
            data: {
                street: data.street,
                number: data.number,
                city: data.city,
                state: data.state,
                zipCode: data.zipCode,
                neighborhood: data.neighborhood,
                country: data.country,
            }
        })
    }

    async deleteAddress(id: string){
        return await prisma.address.delete({
            where: {id}
        })
    }
}