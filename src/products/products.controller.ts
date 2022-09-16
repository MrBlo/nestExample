import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {CreateProductDto} from '../dto/create-product.dto'
import {Product} from "../interfaces/product.interface";

@Controller('products')
export class ProductsController{
    constructor(private readonly productsService: ProductsService){}

    @Post()
    create(@Body() createCatDto: CreateProductDto) {
        this.productsService.saveProduct(createCatDto);
    }

    @Get()
    getProducts(): Product[] {
        return this.productsService.getProducts();
    }

    @Get(':name')
    getProduct(@Param('name') name: string){
        return this.productsService.getProduct(name);
    }

    @Get('delete/:name')
    deleteProduct(@Param('name') name: string){
        this.productsService.deleteProduct(name)
    }

    @Post('update/:name')
    updateProduct(@Body() createCatDto: CreateProductDto,@Param('name') name: string){
        this.productsService.updateProduct(createCatDto,name)
    }
}
