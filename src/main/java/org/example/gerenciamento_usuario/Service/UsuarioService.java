package org.example.gerenciamento_usuario.Service;

import org.example.gerenciamento_usuario.DTO.UsuarioDTO;
import org.example.gerenciamento_usuario.Entity.TipoDeUsuario;
import org.example.gerenciamento_usuario.Entity.Usuario;
import org.example.gerenciamento_usuario.Repository.TipoDeUsuarioRepository;
import org.example.gerenciamento_usuario.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private TipoDeUsuarioRepository tipoDeUsuarioRepository;

    private boolean emailExists(String email) {
        return usuarioRepository.findByEmail(email) != null;
    }


    public Usuario salvarUsuarioDTO(UsuarioDTO usuarioDTO) {
        if (emailExists(usuarioDTO.getEmail())) {
            throw new DataIntegrityViolationException("Email já está em uso: " + usuarioDTO.getEmail());
        }
        Usuario usuario = new Usuario();
        mapearDTOparaUsuario(usuarioDTO, usuario);
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    public Usuario obterUsuario(Long id) {
        return usuarioRepository.findById(id).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    public Usuario atualizarUsuarioDTO(Long id, UsuarioDTO usuarioDTO) {
        Usuario usuarioExistente = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        if (!usuarioExistente.getEmail().equals(usuarioDTO.getEmail()) && emailExists(usuarioDTO.getEmail())) {
            throw new DataIntegrityViolationException("Email já está em uso: " + usuarioDTO.getEmail());
        }

        mapearDTOparaUsuario(usuarioDTO, usuarioExistente);
        return usuarioRepository.save(usuarioExistente);
    }


    private void mapearDTOparaUsuario(UsuarioDTO usuarioDTO, Usuario usuario) {
        usuario.setNome(usuarioDTO.getNome());
        usuario.setEmail(usuarioDTO.getEmail());
        TipoDeUsuario tipoDeUsuario = tipoDeUsuarioRepository.findById(usuarioDTO.getTipoDeUsuarioId())
                .orElseThrow(() -> new RuntimeException("Tipo de usuário não encontrado"));
        usuario.setTipoDeUsuario(tipoDeUsuario);
        // Definir categoriaUsuario baseado em tipoDeUsuarioId
        switch (tipoDeUsuario.getId().intValue()) {
            case 1:
                usuario.setCategoriaUsuario("adm");
                break;
            case 2:
                usuario.setCategoriaUsuario("usuario");
                break;
            case 3:
                usuario.setCategoriaUsuario("gerente");
                break;
            default:
                usuario.setCategoriaUsuario(null);
                break;
        }
    }


    public void deletarUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }
}