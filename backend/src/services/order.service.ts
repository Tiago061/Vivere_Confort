import { CreateOrderDto, UpdateOrderDto } from "../dtos/order.dto";
import { prisma } from "../utils/prisma";

export class OrderService {


  async getOrders(){
    try{
        return await prisma.order.findMany({
            include: {
                user: true,
                orderItems:{
                    include: { product: true }
                }
            },
            orderBy: { createdAt: 'desc'}
        })
        
    } catch(error){
        throw new Error("Failed to get orders: " + (error as Error).message)
    }
  }

  async getOrderById(id: string){
    try{
        if(!id){
            throw new Error("Order ID is required")
        }
        return await prisma.order.findUnique({
            where: { id },
            include: {
                user: true,
                orderItems: { include: { product: true } }
            }
        })
    } catch(error){
        throw new Error("Failed to get order: " + (error as Error).message)
    }
  }

  async createOrder(data: CreateOrderDto){
    try{
        const totalAmount = data.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

        const order = await prisma.order.create({
            data: {
                userId: data.userId,
                payment_method: data.payment_method,
                status: data.status,
                total_amount: totalAmount,
                orderItems: {
                    create: data.orderItems.map(item => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        price: item.price
                    }))
                }
            },
            include: {
                orderItems: { include: { product: true }},
                user: true
            }
        })
        return order
    } catch(error){
        throw new Error("Failed to create order: " + (error as Error).message)
    }
  }

  async updateOrderStatus(id: string, status: UpdateOrderDto){
    try{
        if(!id){
            throw new Error("Order ID is required")
        }
        return await prisma.order.update({
            where: { id },
            data: { status: status.status}
        })
    } catch(error){
        throw new Error("Failed to update order status: " + (error as Error).message)
    }
  }

  async deleteOrder(id: string){
    try{
            if(!id){
                throw new Error("Order ID is required")
            }
            return await prisma.order.delete({
                where: { id }
            })
        } catch(error){
            throw new Error("Failed to delete order: " + (error as Error).message)
        }
    }
}