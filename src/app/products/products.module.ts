import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    MaterialModule
  ]
})
export class ProductsModule { }
