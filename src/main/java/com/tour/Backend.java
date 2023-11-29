package com.tour;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication(scanBasePackages = "com.tour")
public class Backend {

	public static void main(String[] args) {
		SpringApplication.run(Backend.class, args);
	}

}
