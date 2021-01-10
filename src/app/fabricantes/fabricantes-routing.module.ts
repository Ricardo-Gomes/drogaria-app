import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { FabricantesFormComponent } from './fabricantes-form/fabricantes-form.component';
import { FabricantesListaComponent } from './fabricantes-lista/fabricantes-lista.component';

const routes: Routes = [
  {
    path: 'fabricantes', component: LayoutComponent, children: [
      { path: 'form', component: FabricantesFormComponent },
      { path: 'form/:id', component: FabricantesFormComponent },
      { path: 'lista', component: FabricantesListaComponent },
      { path: '', redirectTo: '/fabricantes/lista', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricantesRoutingModule { }
