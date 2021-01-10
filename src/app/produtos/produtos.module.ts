import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency/src/currency-mask.module';


@NgModule({
  declarations: [
    ProdutosFormComponent, 
    ProdutosListaComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ], exports: [
    ProdutosFormComponent
  ]
})
export class ProdutosModule { }
