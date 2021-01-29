import { EmployeeservicesService } from './../../service/employeeservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  
  constructor(private employeeservices:EmployeeservicesService) { }

  ngOnInit(): void {
  }
handlesubmit(name:string,age:number,designation:string){
  this.employeeservices.addemployee(name,age,designation)
}
}
