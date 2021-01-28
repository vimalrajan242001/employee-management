import { EmployeeservicesService } from './service/employeeservices.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [EmployeeservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
