package org.example.gerenciamento_usuario.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tipo_usuario")
public class TipoDeUsuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nome; // Ex: Admin, Usuário, Gerente, etc.

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
