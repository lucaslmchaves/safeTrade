package com.example.demo.controllers;

import com.example.demo.models.Evaluation;
import com.example.demo.services.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/avaliacao")
public class EvaluationController {

    @Autowired
    private EvaluationService evaluationService;

    @GetMapping
    public Map<String, String> getRating() {
        String rating = evaluationService.getCurrentRating();
        Map<String, String> response = new HashMap<>();
        response.put("rating", rating);
        return response;
    }

    @PostMapping
    public Evaluation createEvaluation(@RequestBody Evaluation evaluation) {
        return evaluationService.saveEvaluation(evaluation);
    }
}
