import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricantesRoutingModule } from './fabricantes-routing.module';
import { FabricantesFormComponent } from './fabricantes-form/fabricantes-form.component';
import { FabricantesListaComponent } from './fabricantes-lista/fabricantes-lista.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    FabricantesFormComponent,
    FabricantesListaComponent
  ],
  imports: [
    CommonModule,
    FabricantesRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ], exports: [
    FabricantesFormComponent,
    FabricantesListaComponent
  ]
})
export class FabricantesModule { }
