import { Component, OnInit } from '@angular/core';
import { PROFESSORES } from '../mock-professores';
import { Professor } from '../professor';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
professor = PROFESSORES;
selectedProfessor: Professor;

onSelect(professor: Professor): void {
  this.selectedProfessor = professor;
}

  constructor() { }

  ngOnInit() {
  }

}
