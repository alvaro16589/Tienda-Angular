import { Injectable } from '@angular/core';
import { Producto } from './../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productos: Producto[] = [//array de productos que esta vigilado por el archivo 'product.model.ts'
    { 
      id: '1',
      imagen: 'assets/images/camiseta.png',
      titulo: 'Camiseta',
      precio: 6546546,
      descripcion: 'asdfsaf esasdf eskfeslfnse  esfs eke s se'
    },
    {
      id: '2',
      imagen: 'assets/images/hoodie.png',
      titulo: 'chaqueta',
      precio: 987987979,
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
      precio: 5,
      descripcion: 'asdfsaf esasdf eskfeslfnse  esfs eke s se'
    },
    {
      id: '5',
      imagen: 'assets/images/stickers1.png',
      titulo: 'pegatina 1',
      precio: 546.5464,
      descripcion: 'asdfsaf esasdf eskfeslfnse  esfs eke s se'
    },
    {
      id: '6',
      imagen: 'assets/images/stickers2.png',
      titulo: 'peganitina 2',
      precio: 897.1,
      descripcion: 'asdfsaf esasdf eskfeslfnse  esfs eke s se'
    },
  ];
  constructor() { }

  getAllProducts() {
    return this.productos
  }
  getProduct(id: string){
    return this.productos.find(item => id == item.id);
  }
}
