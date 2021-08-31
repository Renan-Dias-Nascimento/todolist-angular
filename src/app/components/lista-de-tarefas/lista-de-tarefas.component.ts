import { Component, OnInit } from '@angular/core';
import { Tarefa } from "src/app/models/tarefa";

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

tarefas: Tarefa[] = [
  {
    feita: true,
    texto: "Acabar o dever de casa",
    prioridade: 2,
  },
  {
    feita: false,
    texto: "Dormir feliz",
    prioridade: 1,
  },
  {
    feita: true,
    texto: "Amar mais a namorada",
    prioridade: 3,
  },
  {
    feita: true,
    texto: "Melhorar o estado mental",
    prioridade: 3,
  },
]; 

  constructor() { }

  ngOnInit(): void {
  }

}
