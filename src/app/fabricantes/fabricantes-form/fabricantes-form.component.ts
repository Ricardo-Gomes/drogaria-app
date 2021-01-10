import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FabricantesService } from 'src/app/fabricantes.service';
import { Fabricante } from '../fabricante';

@Component({
  selector: 'app-fabricantes-form',
  templateUrl: './fabricantes-form.component.html',
  styleUrls: ['./fabricantes-form.component.css']
})
export class FabricantesFormComponent implements OnInit {


  fabricante: Fabricante;
  success: boolean = false;
  errors: String[];
  id: number;
  estados: string[];

  constructor(
    private service: FabricantesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.fabricante = new Fabricante();
    this.estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
      'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getFabricanteById(this.id)
          .subscribe(
            response => this.fabricante = response,
            errorResponse => this.fabricante = new Fabricante()
          )
      }
    })
  }

  voltarParaListagem() {
    this.router.navigate(['/fabricantes/lista'])
  }

  onSubmit() {

    if (this.id) {
      this.service
        .atualizar(this.fabricante)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.fabricante = new Fabricante();
        }, errorResponse => {
          this.errors = ['Erro ao Atualizar o Fabricante.']
        })
    } else {
      this.service
        .salvar(this.fabricante)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.fabricante = new Fabricante();
        },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          }
        )
    }
  }
}
