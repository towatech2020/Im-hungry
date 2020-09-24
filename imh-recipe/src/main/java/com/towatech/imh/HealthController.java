package com.towatech.imh;

import java.util.*;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@CrossOrigin(origins = "*")
@RestController
public class HealthController {

	@GetMapping("/health")
  @ResponseStatus(HttpStatus.OK)
	public String getHealth() {
		return "healthy";
	}

}
