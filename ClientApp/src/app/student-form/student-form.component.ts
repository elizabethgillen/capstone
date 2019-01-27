import { Component } from '@angular/core';

import { Student }    from '../student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  years = ['First Year', 'Sophomore',
    'Junior', 'Senior'];

  model = new Student(555555555, 'Elizabeth', 1234567890, 'student@arcadia.edu', this.years[3], 'Computer Science');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  newStudent() {
    this.model = new Student(0, '', 0, '', '', '');
  }
}
