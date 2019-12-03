import { Component, OnInit } from '@angular/core';
import { EnvioService } from '../envio.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  private basic: boolean;
  private acao: number;

  private modalEnvio: Envio;
  private envios = new Array<Envio>();

  constructor(private service: EnvioService) { }

  ngOnInit() {
    this.modalEnvio = new Envio();
    this.service.getEnvios().subscribe(envios => this.envios = envios);
    this.acao = -1;
  }

  salvar() {
    if( this.acao == 0) {
      this.service.adicionar(this.modalEnvio).subscribe(res => {
        this.modalEnvio.idenvio = res.insertId;
        this.envios.push(this.modalEnvio);
        this.fecharModal();
      });
    } else if(this.acao == 1) {
      this.service.editar(this.modalEnvio).subscribe(res => {
        let envioIdx = this.envios.findIndex(e => e.idenvio == this.modalEnvio.idenvio);
        this.envios[envioIdx] = this.modalEnvio;
        this.fecharModal();
      });
    }
  }

  editar(envio: Envio) {
    this.service.getEnvio(envio.idenvio).subscribe(envio => {
      this.modalEnvio = envio;
      this.acao = 1;
      this.basic = true;
    });
  }

  adicionar() {  
    this.modalEnvio = new Envio();
    this.acao = 0;
    this.basic = true;
  }

  remover(envio: Envio) {
    this.service.remover(envio.idenvio).subscribe(res => {
      let envioIdx = this.envios.indexOf(envio);
      this.envios.splice(envioIdx, 1);
    })
  }

  cancelar() {
    this.fecharModal();
  }

  fecharModal() {
    this.modalEnvio = new Envio();
    this.acao = -1;
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