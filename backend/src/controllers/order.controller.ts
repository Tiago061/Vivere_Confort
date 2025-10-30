import { OrderService } from "../services/order.service"

export class OrderController {
    private orderService: OrderService
    
    constructor(){
        this.orderService = new OrderService()
    }
}