import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FabricantesService } from 'src/app/fabricantes.service';
import { ProdutosService } from 'src/app/produtos.service';
import { Produto } from '../produto';
import { ProdutoBusca } from './produtoBusca';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  produtos: Produto[] = [];
  produtoSelecionado: Produto;
  produtoVerificacao: Produto;
  nome: string;
  mensagemSucesso: string;
  mensagemErro: string;
  message: string;
  lista: ProdutoBusca[];

  constructor(
    private service: ProdutosService,
    private fabricantesService: FabricantesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getProdutos().subscribe(resposta => this.produtos = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/produtos/form'])
  }

  preparaDelecao(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  preparaVerificacao(produto: Produto) {
    this.produtoVerificacao = produto;
  }

  deletarProduto() {
    this.service
      .deletar(this.produtoSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Produto deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o Produto.'
      )
  }
}
