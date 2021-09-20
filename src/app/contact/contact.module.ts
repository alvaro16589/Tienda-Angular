import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';// para que se reconoscan directivas como ngfor
import { ContactComponent } from './components/contact.component'
import { ContactRoutingModule } from './contact-routing.module';
@NgModule({
    declarations:[ 
        ContactComponent       
       
    ],
    imports:[
        ContactRoutingModule,
        CommonModule,
        
    ]
})

export class ContactModule{}