import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from './produtos/produto';
import { ProdutoBusca } from './produtos/produtos-lista/produtoBusca';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.apiUrlBase + '/api/produtos';

  salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.apiUrl}`, produto)
  }

  atualizar(produto: Produto): Observable<any> {
    return this.http.put<Produto>(`${this.apiUrl}/${produto.id}`, produto);
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deletar(produto: Produto): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${produto.id}`);
  }

  buscar(nome: string): Observable<ProdutoBusca[]> {
    const httpParams = new HttpParams().set("nome", nome ? nome : '');
    const url = this.apiUrl + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

}
