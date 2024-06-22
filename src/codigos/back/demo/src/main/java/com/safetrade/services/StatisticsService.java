package com.safetrade.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.safetrade.repositories.AnuncioRepository;
import com.safetrade.repositories.AvaliacaoRepository;
import com.safetrade.repositories.UsuarioRepository;

@Service
public class StatisticsService {

    @Autowired
    private AnuncioRepository anuncioRepository;

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    @Autowired
    public UsuarioRepository usuarioRepository;

    public double getAcceptedOffersPercentage() {
        long acceptedOffers = anuncioRepository.countAcceptedOffers();
        long totalOffers = anuncioRepository.countTotalOffers();
        return (double) acceptedOffers / totalOffers * 100;
    }

    public double getCompletedExchangesPercentage() {
        long completedExchanges = avaliacaoRepository.countCompletedExchanges();
        long totalExchanges = avaliacaoRepository.countTotalExchanges();
        return (double) completedExchanges / totalExchanges * 100;
    }

    public double getActiveAdvertisementsPercentage() {
        long activeAdvertisements = anuncioRepository.countAcceptedOffers(); // Assuming active advertisements are those accepted
        long totalAdvertisements = anuncioRepository.countTotalOffers(); // Assuming total advertisements are the total offers
        return (double) activeAdvertisements / totalAdvertisements * 100;
    }
}
