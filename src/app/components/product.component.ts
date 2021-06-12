import { Component,
     Input,
      Output,
       EventEmitter,
        OnChanges,
         SimpleChanges,
          OnInit,
           DoCheck,
            OnDestroy } from '@angular/core';

import { Producto } from '../product.model';


@Component({
    selector: 'app-product',
    templateUrl:'./product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements  OnInit, DoCheck, OnDestroy {
    
    @Input() producto!: Producto;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    constructor(){//Se ejecuta cuando la pagina se crea
        console.log('1.constructor') 
    }
   // ngOnChanges(changes: SimpleChanges): void {//método para checar los cambios en la pagina en tiempo real: importarse OnChanges, SimpleChanges,
   //     console.log('2. ngOnChange');
   //     console.log(changes);
   // }
    ngOnInit(){//solo se ejecuta una vez cuando el componente ya fue puesto en pantalla
        console.log('3. ngOnInit');
    }
    
    ngDoCheck(){//vigila los eventos de cambios de componentes
        console.log('4. ngDoCheck');
    }

    ngOnDestroy(){ //cuando un componente se destruye
        console.log('5. ngOnDestroy');
    }
  
    addCar(){
        console.log('añadir al carrito');
        this.productClicked.emit(this.producto.id); 
    }

}