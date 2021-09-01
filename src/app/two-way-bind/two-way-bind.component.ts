import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-bind',
  templateUrl: './two-way-bind.component.html',
  styleUrls: ['./two-way-bind.component.css']
})
export class TwoWayBindComponent implements OnInit {
  employee:any;
  constructor() { 
    this.employee = {
      id : 23421,
      name : "Aman",
      address : "Delhi",
      salary : 32000
    }
  }

  ngOnInit(): void {
  }

}
