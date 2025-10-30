
export interface OrderItemsDto{
    productId: string
    quantity: number
    price: number
}

export interface CreateOrderDto{
    userId: string
    payment_method: string
    status: string
    orderItems: OrderItemsDto[]
}

export interface UpdateOrderDto{
    status: string
}