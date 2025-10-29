import { OrderItemsDto } from "./orderItems.dto"

export interface OrderDto{
    userId: string
    payment_method: string
    status: string
    orderItems: OrderItemsDto[]
    createdAt: Date
    updatedAt: Date
}