import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viagem } from './viagem/viagem.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  constructor(private http: HttpClient) { }

  getViagens(): Observable<Viagem[]> {
    return this.http.get<Viagem[]>("http://localhost:3000/viagens");
  }

  getViagem(idviagem: number): Observable<Viagem> {
    return this.http.get<Viagem>("http://localhost:3000/viagem/" + idviagem);
  }

  adicionar(viagem: Viagem): Observable<any> {
    return this.http.post("http://localhost:3000/viagem", viagem);
  }

  editar(viagem: Viagem): Observable<any> {
    return this.http.put("http://localhost:3000/viagem/" + viagem.idviagem, viagem);
  }

  remover(idviagem: number): Observable<any> {
    return this.http.delete("http://localhost:3000/viagem/" + idviagem);
  }
}