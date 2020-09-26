import { Department } from './../interfaces/department';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  departments: Department[] = [
    { id: '1', name: 'Customer Service' },
    { id: '2', name: 'Sales' },
    { id: '3', name: 'Finance' },
  ];
}
