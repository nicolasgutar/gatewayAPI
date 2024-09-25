import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
    private orders: CreateOrderDto[] = [];

    findAll() {
        return this.orders;
    }

    findOne(id: number) {
        return this.orders.find(order => order.id === id);
    }

    create(order: CreateOrderDto) {
        this.orders.push(order);
        return order;
    }

    update(id: number, updateOrderDto: Partial<CreateOrderDto>) {
        const orderIndex = this.orders.findIndex(order => order.id === id);
        if (orderIndex > -1) {
            this.orders[orderIndex] = { ...this.orders[orderIndex], ...updateOrderDto };
            return this.orders[orderIndex];
        }
        return null;
    }

    remove(id: number) {
        const orderIndex = this.orders.findIndex(order => order.id === id);
        if (orderIndex > -1) {
            const order = this.orders.splice(orderIndex, 1);
            return order;
        }
        return null;
    }
}