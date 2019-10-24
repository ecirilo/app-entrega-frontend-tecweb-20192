import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent implements OnInit {

  private viagens = [{
    idviagem: 0,
    origem: "São João del-rei",
    destino: "Belo Horizonte",
    valor: 10.0
  },{
    idviagem: 1,
    origem: "São João del-rei",
    destino: "Rio de Janeiro",
    valor: 30.0
  }];

  constructor() { }

  ngOnInit() {
  }

}
