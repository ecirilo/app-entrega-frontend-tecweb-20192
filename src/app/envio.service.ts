import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Envio } from './envio/envio.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {

  constructor(private http: HttpClient) { }

  getEnvios(): Observable<Envio[]> {
    return this.http.get<Envio[]>('http://localhost:3000/envios');
  }
}
