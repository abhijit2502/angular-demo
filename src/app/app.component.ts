import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task';

  name:string="Abhijit";
  date1 = new Date("1996-02-25");
  isDisplay:boolean = false;
  isVerified:boolean=false;
  b:number=10;
  onClick(){
    this.isDisplay=true;
  }
  onSubmit(a:number){
    this.isVerified=true;
    if(a==1){
      this.isDisplay=false;
    }
  }
  
}
