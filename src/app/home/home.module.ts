import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';// para que se reconoscan directivas como ngfor

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent} from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations:[ 
        HomeComponent,
        BannerComponent        
       
    ],
    imports:[
        //HomeRoutingModule,
        CommonModule,
        
    ]
})

export class HomeModule{}