import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../core/services/products/products.service';


import { Producto } from 'src/app/product.model'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productos: Producto| any;
  constructor(
    private productService : ProductsService
    ) {
  
}

  ngOnInit() {  
    this.productos = this.productService.getAllProducts();

  }
  //productos: any[] | undefined ; ProductsService: any["productos"];
  
  clickProduct(id: number){//recoger valores desde la pagina product.component.html
    console.log('producto');
    console.log(id);
  }
}
