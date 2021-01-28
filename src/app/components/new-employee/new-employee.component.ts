import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
addEmployee(uid:string,name:string,age:number,designation:string){
  console.log(uid , name , age , designation)
}
}
