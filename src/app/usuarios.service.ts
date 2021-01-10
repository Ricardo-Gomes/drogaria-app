import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuarios/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.apiUrlBase + '/api/usuarios';


  salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}`, usuario);
  }

  atualizar(usuario: Usuario): Observable<any> {
    return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deletar(usuario: Usuario): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${usuario.id}`);
  }
}
