import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {// para que funcione el routing es necesaria este path para llamar al componente
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [ 
    

  ],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
