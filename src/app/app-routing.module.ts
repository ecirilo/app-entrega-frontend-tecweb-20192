import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViagemComponent } from './viagem/viagem.component';
import { EnvioComponent } from './envio/envio.component';


const routes: Routes = [
  { path: '', component: ViagemComponent },
  { path: 'viagens', component: ViagemComponent },
  { path: 'envios', component: EnvioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
