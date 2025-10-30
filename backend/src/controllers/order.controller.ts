import { OrderService } from "../services/order.service";
import { Request, Response } from "express";

export class OrderController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  async findAll(req: Request, res: Response) {
    try {
      const orders = await this.orderService.getOrders();
      return res.json(orders);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unknown error retrieving orders";
      res.status(500).json({ message });
    }
  }

  async findById(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;
      const order = await this.orderService.getOrderById(id);
      return res.json(order);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error finding order";
      res.status(500).json({ message });
    }
  }

  async createOrder(req: Request, res: Response) {
    try {
      const newOrder = await this.orderService.createOrder(req.body);
      return res.status(201).json(newOrder);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error creating order";
      res.status(500).json({ message });
    }
  }

  async updateStatus(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;
      const updatedStatus = await this.orderService.updateOrderStatus(
        id,
        req.body
      );
      return res.json(updatedStatus);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error updating order";
      res.status(500).json({ message });
    }
  }

  async deleteOrder(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;
      const deletedOrder = await this.orderService.deleteOrder(id);
      return res.json(deletedOrder);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error deleting order";
      res.status(500).json({ message });
    }
  }
}
