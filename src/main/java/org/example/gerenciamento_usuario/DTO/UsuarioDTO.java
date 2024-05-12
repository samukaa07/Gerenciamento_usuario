package org.example.gerenciamento_usuario.DTO;

public class UsuarioDTO {

    private Long id;
    private String nome;
    private String email;
    private String categoriaUsuario;
    private Long tipoDeUsuarioId;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCategoriaUsuario() {
        return categoriaUsuario;
    }

    public void setCategoriaUsuario(String categoriaUsuario) {
        this.categoriaUsuario = categoriaUsuario;
    }

    public Long getTipoDeUsuarioId() {
        return tipoDeUsuarioId;
    }

    public void setTipoDeUsuarioId(Long tipoDeUsuarioId) {
        this.tipoDeUsuarioId = tipoDeUsuarioId;
    }
}
