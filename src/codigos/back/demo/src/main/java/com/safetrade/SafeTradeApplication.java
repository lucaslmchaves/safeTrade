package com.safetrade;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.safetrade.models")
@EnableJpaRepositories(basePackages = "com.safetrade.repositories")
public class SafeTradeApplication {

    public static void main(String[] args) {
        SpringApplication.run(SafeTradeApplication.class, args);
    }
}
