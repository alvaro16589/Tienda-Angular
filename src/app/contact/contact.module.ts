import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';// para que se reconoscan directivas como ngfor
import { ContactComponent } from './components/contact.component'
@NgModule({
    declarations:[ 
        ContactComponent       
       
    ],
    imports:[
        //HomeRoutingModule,
        CommonModule,
        
    ]
})

export class ContactModule{}