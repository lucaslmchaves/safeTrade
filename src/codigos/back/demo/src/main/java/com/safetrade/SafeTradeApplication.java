package com.safetrade;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.safetrade.repositories")
@ComponentScan(basePackages = "com.safetrade")
@EntityScan(basePackages = "com.safetrade.models")
public class SafeTradeApplication {

    public static void main(String[] args) {
        SpringApplication.run(SafeTradeApplication.class, args);
    }
}
