import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  private basic: boolean;

  private novoEnvio: Envio;
  private envios: Envio[];

  constructor() { }

  ngOnInit() {
    this.novoEnvio = new Envio();
    this.envios = new Array<Envio>();
  }

  adicionar() {
    this.envios.push(this.novoEnvio);
    this.novoEnvio = new Envio();
    this.basic = false;
  }

  cancelar() {
    this.basic = false;
  }
}

export class Envio {
  idenvio: number;
  entregou: boolean;
  avaliacao: number;
  descricao: string;

  constructor() {
    this.idenvio = 0;
    this.entregou = false;
    this.avaliacao = 0;
    this.descricao = "";
  }
}