import { Component } from '@angular/core';
import { Producto } from './product.model' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TiendaMRZ';
  array = ['ana', 'tomas', 'julia','isabel'];
  productos: Producto[] = [//array de productos que esta vigilado por el archivo 'product.model.ts'
    { 
      id: '1',
      imagen: 'assets/images/camiseta.png',
      titulo: 'Camiseta',
      precio: 2313,
      descripcion: 'asdfsaf esasdf eskfeslfnse  esfs eke s se'
    },
    {
      id: '2',
      imagen: 'assets/images/hoodie.png',
      titulo: 'chaqueta',
      precio: 2313,
      descripcion: 'asdfsaf esasdf eskfeslfnse  esfs eke s se'
    },
    {
      id: '3',
      imagen: 'assets/images/mug.png',
      titulo: 'tasa',
      precio: 2313,
      descripcion: 'asdfsaf esasdf eskfeslfnse  esfs eke s se'
    },
    {
      id: '4',
      imagen: 'assets/images/pin.png',
      titulo: 'prendedor',
      precio: 2313,
      descripcion: 'asdfsaf esasdf eskfeslfnse  esfs eke s se'
    },
    {
      id: '5',
      imagen: 'assets/images/stickers1.png',
      titulo: 'pegatina 1',
      precio: 2313,
      descripcion: 'asdfsaf esasdf eskfeslfnse  esfs eke s se'
    },
    {
      id: '6',
      imagen: 'assets/images/stickers2.png',
      titulo: 'peganitina 2',
      precio: 2313,
      descripcion: 'asdfsaf esasdf eskfeslfnse  esfs eke s se'
    },
  ];
  addItem(){//funcion para agregar items a el arreglo 'array'
    this.array.push('nuevoitem');
  };
  borrarItem(index: number){//funcions para borrar items del arreglo 'array'
    this.array.splice(index,1);
  }
  clickProduct(id: number){//recoger valores desde la pagina product.component.html
    console.log('producto');
    console.log(id);
  }
}
