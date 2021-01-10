import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FabricantesService } from 'src/app/fabricantes.service';
import { Fabricante } from '../fabricante';

@Component({
  selector: 'app-fabricantes-lista',
  templateUrl: './fabricantes-lista.component.html',
  styleUrls: ['./fabricantes-lista.component.css']
})
export class FabricantesListaComponent implements OnInit {


  fabricantes: Fabricante[] = [];
  fabricanteSelecionado: Fabricante;
  fabricanteVerificacao: Fabricante;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: FabricantesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service
      .getFabricantes()
      .subscribe(resposta => this.fabricantes = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/fabricantes/form'])
  }

  preparaDelecao(fabricante: Fabricante) {
    this.fabricanteSelecionado = fabricante;
  }

  preparaVerificacao(fabricante: Fabricante) {
    this.fabricanteVerificacao = fabricante;
  }

  deletarFabricante() {
    this.service
      .deletar(this.fabricanteSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Fabricante deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o Fabricante.'
      )
  }
}
