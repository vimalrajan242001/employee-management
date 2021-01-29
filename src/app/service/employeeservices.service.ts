import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservicesService {
   employees = [
    {
      name:"vimal",
      age:12,
      designation:"fresher"
    }
  ]
  constructor() { }
  addemployee(name:string,age:number,designation:string){
    this.employees.push({name:name,age:age,designation:designation})
    // console.log("added")
  }
  getemployee(id:number){
    return this.employees[id]
  }
 deleteEmployee(id:string){
    this.employees = this.employees.filter(employee => employee[id] != employee[id]);
  }
}
