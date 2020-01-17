import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastroComponent} from './components/cadastro/cadastro.component';
import {AppAuthGuard} from './app.authguard';
import {RelatorioComponent} from './components/relatorio/relatorio.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/cadastros',
    pathMatch: 'full'
  },
  {
    path: 'cadastros',
    component: CadastroComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['admin', 'user']}
  },
  {
    path: 'relatorios',
    component: RelatorioComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['admin']}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }
