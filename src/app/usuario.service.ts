import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Usuario } from './usuario';  // Assumindo que você tem um modelo 'Usuario'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiURL = 'http://localhost:8080/api/usuarios';  // Ajuste o URL conforme necessário

  constructor(private http: HttpClient) { }

  // Listar todos os usuários
  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiURL).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    // You can customize this method to handle errors based on status code or error message
    console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    return throwError('Something bad happened; please try again later.');
  }

  // Obter um usuário pelo ID
  obterUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiURL}/${id}`);
  }

  // Criar um novo usuário
  criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiURL, usuario);
  }

  // Atualizar um usuário existente
  atualizarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiURL}/${id}`, usuario);
  }

  // Deletar um usuário
  deletarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
