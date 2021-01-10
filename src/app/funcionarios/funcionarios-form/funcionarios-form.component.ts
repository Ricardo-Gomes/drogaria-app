import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FuncionariosService } from 'src/app/funcionarios.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.css']
})
export class FuncionariosFormComponent implements OnInit {

  funcionario: Funcionario;
  success: boolean = false;
  errors: String[];
  id: number;
  estados: string[];
  estadosCivis: string[];
  sexos: string[];
  tiposContratos: string[];

  constructor(
    private service: FuncionariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.funcionario = new Funcionario();
    this.estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
      'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    this.estadosCivis = ['Solteiro(a)', 'Casado(a)', 'Viúvo(a)', 'Divorciado(a)', 'Não informado'];
    this.sexos = ['Feminino', 'Masculino', 'Outros', 'Não informado'];
    this.tiposContratos = ['CLT', 'RPA', 'Estágio', 'Temporário']
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getFuncionarioById(this.id)
          .subscribe(
            response => this.funcionario = response,
            errorResponse => this.funcionario = new Funcionario()
          )
      }
    })
  }

  voltarParaListagem() {
    this.router.navigate(['/funcionarios/lista'])
  }

  onSubmit() {

    if (this.id) {
      this.service.atualizar(this.funcionario)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.funcionario = new Funcionario();
        }, errorResponse => {
          this.errors = ['Erro ao Atualizar o Funcionario.']
        })
    } else {
      this.service
        .salvar(this.funcionario)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.funcionario = new Funcionario();
        },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          }
        )
    }
  }

}
