import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';
import { ClientesModule } from './clientes/clientes.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ProdutosModule } from './produtos/produtos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClientesService } from './clientes.service';
import { FuncionariosService } from './funcionarios.service';
import { ProdutosService } from './produtos.service';
import { UsuariosService } from './usuarios.service';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { FabricantesModule } from './fabricantes/fabricantes.module';
import { FabricantesService } from './fabricantes.service';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    NgxMaskModule.forRoot(),
    ClientesModule,
    FuncionariosModule,
    ProdutosModule,
    UsuariosModule,
    FabricantesModule,
    BrowserAnimationsModule
  ],
  providers: [
    ClientesService,
    FuncionariosService,
    ProdutosService,
    UsuariosService,
    FabricantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
