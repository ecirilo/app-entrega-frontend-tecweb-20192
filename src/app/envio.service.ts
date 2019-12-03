import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Envio } from './envio/envio.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {

  private options = {};

  constructor(private http: HttpClient) { 
    this.options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('TOKEN')
      })
    }
  }

  getEnvios(): Observable<Envio[]> {
    return this.http.get<Envio[]>('http://localhost:3000/envios', this.options);
  }

  getEnvio(idenvio: number): Observable<Envio> {
    return this.http.get<Envio>('http://localhost:3000/envio/' + idenvio, this.options);
  }

  adicionar(envio: Envio): Observable<any> {
    return this.http.post('http://localhost:3000/envio', envio, this.options);
  }

  editar(envio: Envio): Observable<any> {
    return this.http.put('http://localhost:3000/envio/' + envio.idenvio, envio, this.options);
  }

  remover(idenvio: number): Observable<any> {
    return this.http.delete('http://localhost:3000/envio/' + idenvio, this.options);
  }
}
