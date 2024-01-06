package com.coderdot.controllers;

import com.coderdot.dto.HelloResponse;
import com.coderdot.entities.Customer;
import com.coderdot.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class HelloController {

    @Autowired
    private final CustomerRepository customerRepository;

    public HelloController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @GetMapping("/hello")
    public HelloResponse hello(){
        return new HelloResponse("Hello from Authorized API request.");
    }

    @GetMapping("/allcustomers")
    public List<Customer> getAllUsers(){
        return customerRepository.findAll();
    }

}
