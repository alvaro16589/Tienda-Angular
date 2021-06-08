import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Producto } from '../product.model';


@Component({
    selector: 'app-product',
    templateUrl:'./product.component.html',
})

export class ProductComponent{
    
    @Input() producto!: Producto;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    addCar(){
        console.log('añadir al carrito');
        this.productClicked.emit(this.producto.id); 
    }
}