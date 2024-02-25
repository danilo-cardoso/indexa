import { Routes } from '@angular/router';

import { FormularioContatoComponent } from './pages/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './pages/lista-contatos/lista-contatos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lista-contatos', pathMatch: 'full' },
  { path: 'lista-contatos', component: ListaContatosComponent },
  { path: 'formulario', component: FormularioContatoComponent },
  { path: '**', redirectTo: 'lista-contatos' },
];
