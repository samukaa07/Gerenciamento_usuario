import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuarioAtual: Usuario | null = null;
  editando: boolean = false;

  constructor(private usuarioService: UsuarioService,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.usuarioService.listarUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.snackBar.open('Usuário cadastrado com sucesso!', 'Fechar', { duration: 3000 });
      },
      error: (err) => {
        console.error('Erro ao carregar usuários:', err);
        this.snackBar.open('Erro ao carregar usuários.', 'Fechar', { duration: 3000 });
      }
    });
  }

  deletarUsuario(id: number): void {
    this.usuarioService.deletarUsuario(id).subscribe({
      next: () => {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
        this.snackBar.open('Usuário deletado com sucesso!', 'Fechar', { duration: 3000 });
      },
      error: (err) => {
        console.error('Erro ao deletar usuário:', err);
        this.snackBar.open('Erro ao deletar usuário.', 'Fechar', { duration: 3000 });
      }
    });
  }

  iniciarEdicao(usuario: Usuario): void {
    console.log('Editando usuario', usuario);
    this.usuarioAtual = { ...usuario };
    this.editando = true;
  }

salvarUsuario(): void {
  if (this.usuarioAtual) {
    this.atualizarCategoriaUsuario();
    if (this.editando) {
      this.usuarioService.atualizarUsuario(this.usuarioAtual.id, this.usuarioAtual).subscribe({
        next: () => {
          this.carregarUsuarios();
          this.editando = false;
          this.usuarioAtual = null;
          this.snackBar.open('Usuário atualizado com sucesso!', 'Fechar', { duration: 3000 });
        },
        error: (err) => {
          console.error('Erro ao atualizar usuário:', err);
          this.snackBar.open('Erro ao atualizar usuário.', 'Fechar', { duration: 3000 });
        }
      });
    } else {
      this.usuarioService.criarUsuario(this.usuarioAtual).subscribe({
        next: () => {
          this.carregarUsuarios();
          this.usuarioAtual = null;
          this.snackBar.open('Usuário criado com sucesso!', 'Fechar', { duration: 3000 });
        },
        error: (err) => {
          console.error('Erro ao criar usuário:', err);
          this.snackBar.open('Erro ao criar usuário.', 'Fechar', { duration: 3000 });
        }
      });
    }
  }
}

  atualizarCategoriaUsuario(): void {
    if (!this.usuarioAtual) return;
  
    switch (this.usuarioAtual.tipoDeUsuarioId) {
      case 1:
        this.usuarioAtual.categoriaUsuario = 'adm';
        break;
      case 2:
        this.usuarioAtual.categoriaUsuario = 'usuario';
        break;
      case 3:
        this.usuarioAtual.categoriaUsuario = 'gerente';
        break;
    }
  }

  novoUsuario(): void {
    console.log('Creating new user');
    this.usuarioAtual = { id: 0, nome: '', email: '', senha: '', tipoDeUsuarioId: 0 };
    this.editando = false;
  }

cancelarEdicao(): void {
  this.usuarioAtual = null;  // Clears the current user being edited or created
  this.editando = false;     // Resets the editing flag
  }  
}
