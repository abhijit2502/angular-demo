import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentdata:string="";
  message:string="Welcome to velocity";

  datafromchildcomponent : string="";
  
  getData(data:any){
  this.datafromchildcomponent=data;
  }
}
