package com.soft.iot_hub_api;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class IotHubAPIApplication implements CommandLineRunner {

	private final DBService dbService;

	public static void main(String[] args) {
		SpringApplication.run(IotHubAPIApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		dbService.init();
	}
}
