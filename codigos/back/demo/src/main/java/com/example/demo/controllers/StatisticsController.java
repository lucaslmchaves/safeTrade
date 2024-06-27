package com.example.demo.controllers;

import com.example.demo.services.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class StatisticsController {

    @Autowired
    private StatisticsService statisticsService;

    @GetMapping("/api/statistics/users/count")
    public Map<String, Long> getUsersCount() {
        Map<String, Long> response = new HashMap<>();
        response.put("count", statisticsService.getUsersCount());
        return response;
    }

    @GetMapping("/api/statistics/exchanges/count")
    public Map<String, Long> getExchangesCount() {
        Map<String, Long> response = new HashMap<>();
        response.put("count", statisticsService.getExchangesCount());
        return response;
    }

    @GetMapping("/api/statistics/advertisements/count")
    public Map<String, Long> getAdvertisementsCount() {
        Map<String, Long> response = new HashMap<>();
        response.put("count", statisticsService.getAdvertisementsCount());
        return response;
    }

    @GetMapping("/api/statistics/partners/count")
    public Map<String, Long> getPartnersCount() {
        Map<String, Long> response = new HashMap<>();
        response.put("count", statisticsService.getPartnersCount());
        return response;
    }
}
