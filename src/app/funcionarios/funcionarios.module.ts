import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    FuncionariosFormComponent, 
    FuncionariosListaComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ], exports: [
    FuncionariosFormComponent
  ]
})
export class FuncionariosModule { }
