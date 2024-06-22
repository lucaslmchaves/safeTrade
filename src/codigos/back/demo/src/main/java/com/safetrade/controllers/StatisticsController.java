package com.safetrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.safetrade.services.StatisticsService;

@RestController
@RequestMapping("/api/statistics")
public class StatisticsController {

    @Autowired
    private StatisticsService statisticsService;

    @GetMapping("/offers/percentage")
    public double getAcceptedOffersPercentage() {
        return statisticsService.getAcceptedOffersPercentage();
    }

    @GetMapping("/exchanges/percentage")
    public double getCompletedExchangesPercentage() {
        return statisticsService.getCompletedExchangesPercentage();
    }

    @GetMapping("/advertisements/percentage")
    public double getActiveAdvertisementsPercentage() {
        return statisticsService.getActiveAdvertisementsPercentage();
    }
}
