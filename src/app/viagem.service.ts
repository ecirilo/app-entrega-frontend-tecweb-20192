import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viagem } from './viagem/viagem.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  private options = {};

  constructor(private http: HttpClient) { }

  getViagens(): Observable<Viagem[]> {
    return this.http.get<Viagem[]>("http://localhost:3000/viagens", this.header());
  }

  getViagem(idviagem: number): Observable<Viagem> {
    return this.http.get<Viagem>("http://localhost:3000/viagem/" + idviagem, this.header());
  }

  adicionar(viagem: Viagem): Observable<any> {    
    return this.http.post("http://localhost:3000/viagem", viagem, this.header());
  }

  editar(viagem: Viagem): Observable<any> {    
    return this.http.put("http://localhost:3000/viagem/" + viagem.idviagem, viagem, this.header());
  }

  remover(idviagem: number): Observable<any> {    
    return this.http.delete("http://localhost:3000/viagem/" + idviagem, this.header());
  }

  header() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('TOKEN')
      })
    };
  }
}