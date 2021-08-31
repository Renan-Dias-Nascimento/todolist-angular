import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Tarefa, Prioridade } from "../../models/tarefa";

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  @Input() tarefa!: Tarefa;

  constructor() { }

  ngOnInit(): void {
  }

}
