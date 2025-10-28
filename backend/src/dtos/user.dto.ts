import { AddressDto } from "./address.dto";
import { OrderDto } from "./order.dto";

export interface UserDto {
    firstName: string, 
    lastName: string, 
    age: number, 
    email: string, 
    cpf: string, 
    password: string,
    role: 'USER' | 'ADMIN',
    addresses?: AddressDto[],
    orders?: OrderDto[]
            
}