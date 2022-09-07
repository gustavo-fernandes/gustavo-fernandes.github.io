import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plano-estudos',
  templateUrl: './plano-estudos.component.html',
  styleUrls: ['./plano-estudos.component.scss']
})
export class PlanoEstudosComponent implements OnInit {
  public popup: { nome: string, nascimento: string, salario: string, imagem: string };

  listaSemestres: any = [
    {
      professor: {
        nome: "José Mourinho",
        salario: "EUR 1917,86",
        nascimento: "6/11/1980",
        imagem: "https://image.shutterstock.com/image-photo/portrait-one-young-happy-cheerful-600w-1949791540.jpg"
      },
      alunos: 49,
      disciplinas: [
        "Arquiteturas de Computadores",
        "Elementos de Matemática I",
        "Produção de Documentos Técnicos",
        "Programação I (LTI)"
      ]
    }, {
      professor: {
        nome: "Rui Costa e Silva",
        salario: "EUR 2004,41",
        nascimento: "11/4/1985",
        imagem: "https://image.shutterstock.com/image-photo/headshot-portrait-smiling-young-caucasian-600w-1916405282.jpg"
      },
      alunos: 47,
      disciplinas: [
        "Elementos de Matemática II",
        "Introdução às Probabilidades e Estatística",
        "Introdução às Tecnologias Web",
        "Programação II (LTI)",
        "Redes de Computadores (LTI)",
      ]
    }, {
      professor: {
        nome: "Erasmo Ferraz",
        salario: "EUR 2140,00",
        nascimento: "13/7/1984",
        imagem: "https://image.shutterstock.com/image-photo/head-shot-portrait-smiling-middle-600w-1339318991.jpg"
      },
      alunos: 45,
      disciplinas: [
        "Bases de Dados",
        "Fundamentos e Técnicas de Visualização",
        "Interação com Computadores",
        "Programação Centrada em Objetos",
        "Sistemas Operativos (LTI)",
      ]
    }, {
      professor: {
        nome: "Renata Torreão",
        salario: "EUR 2140,00",
        nascimento: "19/2/1983",
        imagem: "https://image.shutterstock.com/image-photo/headshot-portrait-happy-millennial-woman-600w-2000899631.jpg"
      },
      alunos: 38,
      disciplinas: [
        "Análise e Desenho de Software",
        "Aplicações Distribuídas",
        "Aplicações e Serviços na Web",
        "Conceção de Produto",
        "Sistemas Inteligentes",
      ]
    }, {
      professor: {
        nome: "Antonio Fernandes",
        salario: "EUR 2000,00",
        nascimento: "25/10/1977",
        imagem: "https://image.shutterstock.com/image-photo/head-shot-young-attractive-businessman-600w-1854697390.jpg"
      },
      alunos: 29,
      disciplinas: [
        "Construção de Sistemas de Software (LTI)",
        "Planeamento e Gestão de Projeto",
        "Projeto de Tecnologias de Informação",
        "Projeto de Tecnologias de Redes",
        "Segurança Informática",
      ]
    }
  ];
  displayStyle = "none";

  constructor() {
    this.popup = {
      nome: "",
      nascimento: "",
      salario: "",
      imagem: ""
    }
  }

  ngOnInit(): void {
  }

  openPopup(professor: any) {
    this.popup = {
      nome: professor.nome,
      nascimento: professor.nascimento,
      salario: professor.salario,
      imagem: professor.imagem
    }
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
