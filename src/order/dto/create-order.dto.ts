import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNumber()
    total_pago: number;

    @ApiProperty()
    @IsString()
    metodo_pago: string;

    @ApiProperty()
    @IsString()
    cc_cliente: string;

    @ApiProperty()
    @IsString()
    envio: string;
}