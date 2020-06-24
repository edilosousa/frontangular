import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial = {
    nome: '',
    telefone: '',
    empresa: '',
    setor: '',
    email: '',
    cargo: ''
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
  }

  saveTutorial() {
    const data = {
      nome: this.tutorial.nome,
      telefone: this.tutorial.telefone,
      empresa: this.tutorial.empresa,
      setor: this.tutorial.setor,
      email: this.tutorial.email,
      cargo: this.tutorial.cargo
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      nome:"",
      telefone: "",
      empresa: "",
      setor: "",
      email: "",
      cargo: ""
    };
  }

}
