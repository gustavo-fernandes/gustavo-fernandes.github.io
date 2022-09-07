import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.scss']
})
export class DisciplinasComponent implements OnInit {
  titulo = "Disciplinas";
  constructor() { }
  disciplinas: any = [
    {
      id: 1,
      nome: "Design"
    },
    {
      id: 2,
      nome: "Design de Moda"
    },
    {
      id: 3,
      nome: "Estudos Gerais"
    },
    {
      id: 4,
      nome: "Biologia"
    },
    {
      id: 5,
      nome: "Bioquímica"
    },
    {
      id: 6,
      nome: "Engenharia"
    },
    {
      id: 7,
      nome: "Física"
    },
    {
      id: 8,
      nome: "Geologia"
    },
    {
      id: 9,
      nome: "Matemática"
    },
    {
      id: 10,
      nome: "Química"
    },
    {
      id: 11,
      nome: "Tecnologias de Informação"
    }
  ];

  ngOnInit(): void {
  }

}
