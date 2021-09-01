import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
  username:string = "Stavan";
  status:string="";
  employees: any = [
    {
      eid: 12832,
      name: "Aman",
      address: "Delhi",
      salary: 30000
    },
    {
      eid: 32372,
      name: "Shreya",
      address: "Vidisha",
      salary: 30000
    },
    {
      eid: 424523,
      name: "Atul",
      address: "Rewari",
      salary: 30000
    },
    {
      eid: 764392,
      name: "Stavan",
      address: "Kolhapur",
      salary: 30000
    }
  ];

  onClick(data:string){
    this.status = data;
  }
  //imageSrc='../assets/webcam.jpg';
}


