package com.example.demo.services;

import com.example.demo.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatisticsService {

    @Autowired
    private UsuarioRepository userRepository;

    @Autowired
    private MessageRepository exchangeRepository;

    @Autowired
    private AnuncioRepository advertisementRepository;

    @Autowired
    private ParceiroRepository partnerRepository;

    public long getUsersCount() {
        return userRepository.countUsers();
    }

    public long getExchangesCount() {
        return exchangeRepository.countExchanges();
    }

    public long getAdvertisementsCount() {
        return advertisementRepository.countAdvertisements();
    }

    public long getPartnersCount() {
        return partnerRepository.countPartners();
    }
}
