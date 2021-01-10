import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionariosService } from 'src/app/funcionarios.service';
import { Funcionario } from '../funcionario';


@Component({
  selector: 'app-funcionarios-lista',
  templateUrl: './funcionarios-lista.component.html',
  styleUrls: ['./funcionarios-lista.component.css']
})
export class FuncionariosListaComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  funcionarioSelecionado: Funcionario;
  funcionarioVerificacao: Funcionario;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: FuncionariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getFuncionarios().subscribe(resposta => this.funcionarios = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/funcionarios/form'])
  }

  preparaDelecao(funcionario: Funcionario) {
    this.funcionarioSelecionado = funcionario;
  }

  preparaVerificacao(funcionario: Funcionario) {
    this.funcionarioVerificacao = funcionario;
  }

  deletarFuncionario() {
    this.service
      .deletar(this.funcionarioSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Funcionário deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o Funcionário.'
      )
  }

}
