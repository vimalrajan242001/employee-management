import { EmployeeservicesService } from './../../service/employeeservices.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
    public Employees:{name:string,age:number,designation:string}
    public paramid = this.route.snapshot.params["id"];
  constructor(private route:ActivatedRoute,
    private employeeservice: EmployeeservicesService,
    private router: Router) { }

  ngOnInit(){
    this.route.paramMap.subscribe(
      params =>{
        let id =+ params.get('id')
        this.Employees = this.employeeservice.getemployee(id)
      }
    )
  }
  delete(index){
    this.employeeservice.deleteEmployee(index)
    this.router.navigate([""]);

  }
}
