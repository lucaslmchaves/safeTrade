package com.example.demo.services;

import com.example.demo.models.Evaluation;
import com.example.demo.repositories.EvaluationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EvaluationService {

    @Autowired
    private EvaluationRepository evaluationRepository;

    public Evaluation saveEvaluation(Evaluation evaluation) {
        return evaluationRepository.save(evaluation);
    }

    public String getCurrentRating() {
       
        Optional<Evaluation> latestEvaluation = evaluationRepository.findTopByOrderByIdDesc();
        return latestEvaluation.map(Evaluation::getRating).orElse("Regular"); 
    }
}
