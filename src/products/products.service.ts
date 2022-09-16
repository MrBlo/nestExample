import { Injectable } from '@nestjs/common';
import {Product} from '../interfaces/product.interface'

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [];

    getProducts(): Product[]{
        return this.products;
    }

    getProduct(name : String): Product{
        const p = this.products.find(p => p.name===name)
        if(!p) return {name:'',description:'',price:0,image:''}
        return p
    }

    saveProduct(product : Product){
        this.products.push(product)
    }

    updateProduct(product : Product, name : String){
        const index = this.products.findIndex(p => p.name===name)
        if(!index) return;
        this.products[index] = product
    }

    deleteProduct(name : String){
        const index = this.products.findIndex(p => p.name===name)
        this.products.splice(index,1)
    }
}
