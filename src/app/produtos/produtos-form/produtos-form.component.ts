import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FabricantesService } from 'src/app/fabricantes.service';
import { Fabricante } from 'src/app/fabricantes/fabricante';
import { ProdutosService } from 'src/app/produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  produto: Produto;
  fabricantes: Fabricante[] = [];
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: ProdutosService,
    private fabricantesService: FabricantesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.produto = new Produto();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getProdutoById(this.id)
          .subscribe(
            response => this.produto = response,
            errorResponse => this.produto = new Produto()
          )
      }
    })

    this.fabricantesService
      .getFabricantes()
      .subscribe(response => this.fabricantes = response);
  }

  voltarParaListagem() {
    this.router.navigate(['/produtos/lista'])
  }

  onSubmit() {

    if (this.id) {
      this.service.atualizar(this.produto)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.produto = new Produto();
        }, errorResponse => {
          this.errors = ['Erro ao Atualizar o Produto.']
        })
    } else {
      this.service
        .salvar(this.produto)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.produto = new Produto();
        },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          }
        )
    }
  }
}
