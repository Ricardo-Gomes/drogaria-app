import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fabricante } from './fabricantes/fabricante';

@Injectable({
  providedIn: 'root'
})
export class FabricantesService {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.apiUrlBase + '/api/fabricantes';

  salvar(fabricante: Fabricante): Observable<Fabricante> {
    return this.http.post<Fabricante>(`${this.apiUrl}`, fabricante);
  }

  atualizar(fabricante: Fabricante): Observable<any> {
    return this.http.put<Fabricante>(`${this.apiUrl}/${fabricante.id}`, fabricante);
  }

  getFabricantes(): Observable<Fabricante[]> {
    return this.http.get<Fabricante[]>(this.apiUrl);
  }

  getFabricanteById(id: number): Observable<Fabricante> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deletar(fabricante: Fabricante): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${fabricante.id}`);
  }
}
