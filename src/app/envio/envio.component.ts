import { Component, OnInit } from '@angular/core';
import { EnvioService } from '../envio.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  private basic: boolean;

  private novoEnvio: Envio;
  private envios = new Array<Envio>();

  constructor(private service: EnvioService) { }

  ngOnInit() {
    this.novoEnvio = new Envio();
    this.service.getEnvios().subscribe(envios => this.envios = envios);
  }

  adicionar() {
    this.envios.push(this.novoEnvio);
    this.novoEnvio = new Envio();
    this.basic = false;
  }

  cancelar() {
    this.novoEnvio = new Envio();
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