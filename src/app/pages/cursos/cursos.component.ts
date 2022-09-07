import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  listaCursos: any = [
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

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
