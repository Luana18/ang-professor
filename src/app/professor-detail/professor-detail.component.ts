import { Component, OnInit, Input } from '@angular/core';
import { Professor } from '../professor';
@Component({
  selector: 'app-professor-detail',
  templateUrl: './professor-detail.component.html',
  styleUrls: ['./professor-detail.component.css']
})
export class ProfessorDetailComponent implements OnInit {
  @Input() Professor: Professor;
  constructor() { }

  ngOnInit() {
  }

}
