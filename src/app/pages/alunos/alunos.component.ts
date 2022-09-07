import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {
  public popup: { nome: string, nascimento: string, matricula: number, notas: any };
  displayStyle = "none";

  alunos: any = [
    {
      nome: "Miguel Kevin Severino Melo",
      nascimento: "02/09/2002",
      matricula: this.matricula()
    },
    {
      nome: "Taylor Calderon",
      nascimento: "6/11/2001",
      matricula: this.matricula()
    },
    {
      nome: "Wilson Solis",
      nascimento: "16/10/2002",
      matricula: this.matricula()
    },
    {
      nome: "Kim Herman",
      nascimento: "23/3/2002",
      matricula: this.matricula()
    },
    {
      nome: "Heather Cunningham",
      nascimento: "6/11/2002",
      matricula: this.matricula()
    },
    {
      nome: "Rosella Hendrix",
      nascimento: "30/3/2001",
      matricula: this.matricula()
    },
    {
      nome: "Ashley Bradley",
      nascimento: "10/7/2003",
      matricula: this.matricula()
    },
    {
      nome: "Martina Hahn",
      nascimento: "2/8/2000",
      matricula: this.matricula()
    },
    {
      nome: "Esperanza Harding",
      nascimento: "19/10/1999",
      matricula: this.matricula()
    },
    {
      nome: "Nell Ramos",
      nascimento: "22/4/2001",
      matricula: this.matricula()
    },
    {
      nome: "Bray Rivas",
      nascimento: "16/2/1999",
      matricula: this.matricula()
    },
    {
      nome: "Prince Burris",
      nascimento: "11/9/2002"
    },
    {
      nome: "Marci Howell",
      nascimento: "21/12/2001",
      matricula: this.matricula()
    },
    {
      nome: "Lidia Rivas",
      nascimento: "8/11/2001",
      matricula: this.matricula()
    },
    {
      nome: "Cecile Noel",
      nascimento: "28/3/2002",
      matricula: this.matricula()
    },
    {
      nome: "Laurie Hopkins",
      nascimento: "27/9/2001",
      matricula: this.matricula()
    },
    {
      nome: "Harrell Contreras",
      nascimento: "13/5/2001",
      matricula: this.matricula()
    },
    {
      nome: "Vickie Fleming",
      nascimento: "9/12/1997",
      matricula: this.matricula()
    },
  ];

  constructor() {
    this.popup = {
      nome: "",
      nascimento: "",
      matricula: 1,
      notas: 0
    }
  }

  ngOnInit(): void {
  }

  matricula() {
    return Math.floor(Math.random() * 100000) + 1;
  }

  notas() {
    const arrNotas = [];
    for (let index = 0; index < 5; index++) {
      arrNotas.push((Math.random() * 10).toFixed(1));
    }
    return arrNotas;
  }



  openPopup(aluno: any) {
    this.popup = {
      nome: aluno.nome,
      nascimento: aluno.nascimento,
      matricula: aluno.matricula,
      notas: this.notas()
    }
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
}
