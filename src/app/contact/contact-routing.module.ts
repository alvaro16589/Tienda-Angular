import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact.component'

const routes: Routes = [
    {
        path: '',
        component: ContactComponent,
    }
];
NgModule({
    imports:[
        RouterModule.forChild(routes),

    ],
    exports:[RouterModule],//para que otros modulos lo puedan utilizar
})

export class ContactRoutingModule {}