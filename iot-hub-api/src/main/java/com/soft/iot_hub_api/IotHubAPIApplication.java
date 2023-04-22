package com.soft.iot_hub_api;

import com.soft.iot_hub_api.service.DBService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor
public class IotHubAPIApplication implements CommandLineRunner {

	private final DBService dbService;

	public static void main(String[] args) {
		SpringApplication.run(IotHubAPIApplication.class, args);
	}

	@Override
	public void run(String... args) {
		dbService.init();
	}
}
