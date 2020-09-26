import { Department } from './../../interfaces/department';
import { DepartmentService } from './../../services/departments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit {
  departments: Department[];
  constructor(private departmentsService: DepartmentService) {}

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
  }
}
