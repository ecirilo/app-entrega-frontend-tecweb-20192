import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent implements OnInit {

  private basic: boolean;
  private acao: number;

  private modalViagem: Viagem;
  private viagens = new Array<Viagem>();

  constructor(private service: ViagemService) { }

  ngOnInit() {
    this.modalViagem = new Viagem();
    this.acao = -1; //Sem acao definida
    this.service.getViagens().subscribe(viagens => this.viagens = viagens);
  }

  salvar() {
    if (this.acao == 0) {
      this.service.adicionar(this.modalViagem).subscribe(res => {
        this.modalViagem.idviagem = res.insertId;
        this.viagens.push(this.modalViagem);
        this.fecharModal();
      });    
    } else if (this.acao == 1) {
      this.service.editar(this.modalViagem).subscribe(res => {
        let viagemIdx = this.viagens.findIndex(v => v.idviagem == this.modalViagem.idviagem);
        this.viagens[viagemIdx] = this.modalViagem;
        this.fecharModal();
      });
    }        
  }

  adicionar() {  
    this.modalViagem = new Viagem();
    this.acao = 0; //Adicionar
    this.basic = true;
  }

  editar(viagem: Viagem) {
    this.service.getViagem(viagem.idviagem).subscribe(viagem => {
      this.modalViagem = viagem;
      this.acao = 1; //Editar
      this.basic = true;
    });
  }

  remover(viagem: Viagem) {
    this.service.remover(viagem.idviagem).subscribe(res => {
      let viagemIdx = this.viagens.indexOf(viagem);
      this.viagens.splice(viagemIdx, 1);
    });
  }

  cancelar() {
    this.modalViagem = new Viagem();
    this.basic = false;
  }

  fecharModal() {
    this.modalViagem = new Viagem();    
    this.acao = -1; //Sem acao definida
    this.basic = false;
  }
}

export class Viagem {
  idviagem: number;
  origem: string;
  destino: string;
  valor: number;

  constructor() {
    this.destino = '';
    this.origem = '';
    this.valor = 0;
  }
}
