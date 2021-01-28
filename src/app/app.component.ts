import { EmployeeservicesService } from './service/employeeservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeservicesService]
})
export class AppComponent implements OnInit{
    Employees : {name:string,age:number,designation:string,uid:string}[] = []

constructor(private employeeservice:EmployeeservicesService){}
ngOnInit(){
  this.Employees = this.employeeservice.employees
}
}
