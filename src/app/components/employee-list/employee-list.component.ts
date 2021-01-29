import { EmployeeservicesService } from './../../service/employeeservices.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
//  @Input() employee : {name:string,age:number,designation:string,uid:string}
    Employees : {name:string,age:number,designation:string}[] = []
 

  constructor(private employeeservice:EmployeeservicesService) { }

  ngOnInit() {
  this.Employees = this.employeeservice.employees

  }

}
