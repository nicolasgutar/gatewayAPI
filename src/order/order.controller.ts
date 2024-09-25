import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('order')
@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get()
    @ApiOperation({ summary: 'Get all orders' })
    findAll() {
        return this.orderService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get order by ID' })
    @ApiParam({ name: 'id', type: Number })
    findOne(@Param('id') id: number) {
        return this.orderService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new order' })
    @ApiBody({ type: CreateOrderDto })
    create(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.create(createOrderDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update an order' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: CreateOrderDto })
    update(@Param('id') id: number, @Body() updateOrderDto: Partial<CreateOrderDto>) {
        return this.orderService.update(id, updateOrderDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete an order' })
    @ApiParam({ name: 'id', type: Number })
    remove(@Param('id') id: number) {
        return this.orderService.remove(id);
    }
}