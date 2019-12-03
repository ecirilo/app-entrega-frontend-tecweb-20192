import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViagemComponent } from './viagem/viagem.component';
import { EnvioComponent } from './envio/envio.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: AuthComponent }, 
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'viagens', component: ViagemComponent, canActivate: [AuthGuard] },
      { path: 'envios', component: EnvioComponent, canActivate: [AuthGuard] }
    ]},  
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
