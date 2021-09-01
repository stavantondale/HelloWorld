import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
  userName:string="";

  @Output()
  status:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onClickSentToParent(){
    this.status.emit("Status sent from child component");
  }

}
