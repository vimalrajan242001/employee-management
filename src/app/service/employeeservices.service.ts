import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservicesService {
   employees = [
    {
      name:"vimal",
      age:12,
      designation:"fresher",
      uid:"qqq"
    }
  ]
  constructor() { }
  addemployee(name:string,age:number,designation:string,uid:string){
    this.employees.push({name:name,age:age,designation:designation,uid:uid})
    console.log("added")
  }
}
