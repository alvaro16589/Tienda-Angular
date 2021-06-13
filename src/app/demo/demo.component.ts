import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'TiendaMRZ';
  power = 10;
  array = ['ana', 'tomas', 'julia','isabel'];
  
  addItem(){//funcion para agregar items a el arreglo 'array'
    this.array.push('nuevoitem');
  };
  borrarItem(index: number){//funcions para borrar items del arreglo 'array'
    this.array.splice(index,1);
  }
 
  constructor() { }

  ngOnInit(): void {
    //code
  }

}
