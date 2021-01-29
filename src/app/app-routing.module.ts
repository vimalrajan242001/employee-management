import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:NewEmployeeComponent},
  {path:'employeedetail/:id',component:EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
