package com.safetrade.services;

import com.safetrade.models.Avaliacao;
import com.safetrade.models.Usuarios;
import com.safetrade.repositories.AvaliacaoRepository;
import com.safetrade.repositories.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AvaliacaoService {

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    @Autowired
    private UsuariosRepository usuariosRepository;

    public Avaliacao createAvaliacao(Avaliacao avaliacao, Long usuarioId) {
        Usuarios usuario = usuariosRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        avaliacao.setUsuario(usuario);
        avaliacao.setTimestamp(System.currentTimeMillis());
        Avaliacao novaAvaliacao = avaliacaoRepository.save(avaliacao);

        atualizarReputacaoUsuario(usuario);

        return novaAvaliacao;
    }

    public List<Avaliacao> getAvaliacoesByUsuarioId(Long usuarioId) {
        return avaliacaoRepository.findByUsuarioId(usuarioId);
    }

    public Optional<Avaliacao> getAvaliacaoById(Long id) {
        return avaliacaoRepository.findById(id);
    }

    public Avaliacao updateAvaliacao(Avaliacao avaliacao) {
        return avaliacaoRepository.save(avaliacao);
    }

    public void deleteAvaliacao(Long id) {
        avaliacaoRepository.deleteById(id);
    }

    private void atualizarReputacaoUsuario(Usuarios usuario) {
        List<Avaliacao> avaliacoes = avaliacaoRepository.findByUsuarioId(usuario.getId());
        long countOtima = avaliacoes.stream().filter(a -> "Ótima".equals(a.getAvaliacao())).count();
        long countRegular = avaliacoes.stream().filter(a -> "Regular".equals(a.getAvaliacao())).count();
        long countRuim = avaliacoes.stream().filter(a -> "Ruim".equals(a.getAvaliacao())).count();

        String novaReputacao;
        if (countOtima >= countRegular && countOtima >= countRuim) {
            novaReputacao = "Ótima";
        } else if (countRegular >= countOtima && countRegular >= countRuim) {
            novaReputacao = "Regular";
        } else {
            novaReputacao = "Ruim";
        }

        usuario.setReputacao(novaReputacao);
        usuariosRepository.save(usuario);
    }
}
