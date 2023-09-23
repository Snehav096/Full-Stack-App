import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeservice:EmployeeService) { }
  ngOnInit(): void {
    this.getEmployees();
  } 
  getEmployees(){
    this.employeeservice.getemployeesList().subscribe
  }
}
