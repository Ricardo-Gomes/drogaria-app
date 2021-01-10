import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionario } from './funcionarios/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.apiUrlBase + '/api/funcionarios';

  salvar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.apiUrl}`, funcionario);
  }

  atualizar(funcionario: Funcionario): Observable<any> {
    return this.http.put<Funcionario>(`${this.apiUrl}/${funcionario.id}`, funcionario);
  }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  getFuncionarioById(id: number): Observable<Funcionario> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deletar(funcionario: Funcionario): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${funcionario.id}`);
  }
}
