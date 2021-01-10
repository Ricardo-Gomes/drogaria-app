import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;
  estados: string[];
  estadosCivis: string[];
  sexos: string[];

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente();
    this.estados = [
      'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 
      'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
    ];
    this.estadosCivis = [
      'Solteiro(a)', 'Casado(a)', 'Viúvo(a)', 'Divorciado(a)', 'Não informado'
    ];
    this.sexos = [
      'Feminino', 'Masculino', 'Outros'
    ];
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getClienteById(this.id)
          .subscribe(
            response => this.cliente = response,
            errorResponse => this.cliente = new Cliente()
          )
      }
    })
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes/lista'])
  }

  onSubmit() {

    if (this.id) {
      this.service.atualizar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.cliente = new Cliente();
        }, errorResponse => {
          this.errors = ['Erro ao Atualizar o Cliente.']
        })
    } else {
      this.service
        .salvar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.cliente = new Cliente();
        },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          }
        )
    }
  }

}
