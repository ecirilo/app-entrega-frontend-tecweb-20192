import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent implements OnInit {

  private basic: boolean;

  private novaViagem: Viagem;
  private viagens = new Array<Viagem>();

  constructor() { }

  ngOnInit() {
    this.novaViagem = new Viagem();
  }

  adicionar() {
    this.viagens.push(this.novaViagem);
    this.novaViagem = new Viagem();
    this.basic = false;
  }

  cancelar() {
    this.novaViagem = new Viagem();
    this.basic = false;
  }
}

export class Viagem {
  origem: string;
  destino: string;
  valor: number;

  constructor() {
    this.destino = '';
    this.origem = '';
    this.valor = 0;
  }
}
