import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports: [/*agregar este array para compartir los elementos que se agrupan dentro de shared module*/
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe
  ]
})
export class SharedModule { }
