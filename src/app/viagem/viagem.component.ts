import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent implements OnInit {

  private basic: boolean;

  private novaViagem: Viagem;
  private viagens = new Array<Viagem>();

  constructor(private service: ViagemService) { }

  ngOnInit() {
    this.novaViagem = new Viagem();
    this.service.getViagens().subscribe(viagens => this.viagens = viagens);
  }

  adicionar() {
    this.service.salvar(this.novaViagem).subscribe(res => {
      this.novaViagem.id = res.insertId;
      this.viagens.push(this.novaViagem);
    });    

    this.novaViagem = new Viagem();    
    this.basic = false;
  }

  cancelar() {
    this.novaViagem = new Viagem();
    this.basic = false;
  }
}

export class Viagem {
  id: number;
  origem: string;
  destino: string;
  valor: number;

  constructor() {
    this.destino = '';
    this.origem = '';
    this.valor = 0;
  }
}
