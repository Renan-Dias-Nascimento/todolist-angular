export class Tarefa {
    feita:boolean;
    texto:string;
    prioridade:Prioridade;

    constructor(texto:string, prioridade:Prioridade) {
        this.texto = texto;
        this.prioridade = prioridade;
        this.feita = false;
    }
}

export enum Prioridade{
    Baixa = 1,
    Media =2,
    Alta =3,
}