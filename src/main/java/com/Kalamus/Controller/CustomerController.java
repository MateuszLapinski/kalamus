package com.Kalamus.Controller;

import com.Kalamus.Entity.Customer;
import com.Kalamus.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping("/allsales")
    public List<Customer> findAll(){
        return customerService.findAll();
    }
}
