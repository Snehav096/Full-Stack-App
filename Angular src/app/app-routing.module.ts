import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component.spec';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule],
  
})
export class AppRoutingModule { }