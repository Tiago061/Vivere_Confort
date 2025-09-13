import { AddressDto } from "./address.dto";
import { OrderDto } from "./order.dto";

export interface CreateUserDto {
    firstname: string, 
    lastname: string, 
    age: number, 
    email: string, 
    cpf: string, 
    addresses?: AddressDto[],
    orders?: OrderDto[]
            
}