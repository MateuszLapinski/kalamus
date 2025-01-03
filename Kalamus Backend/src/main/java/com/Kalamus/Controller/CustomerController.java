package com.Kalamus.Controller;

import com.Kalamus.Entity.Customer;
import com.Kalamus.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping("/all")
    public List<Customer> findAll() {
        return customerService.findAll();
    }

    @GetMapping("/{name}")
    public List<Customer> findByName(@PathVariable String name) {
        return customerService.findByName(name);
    }
    @GetMapping("/findByName/{shortcut}")
    public List<Customer> findByShortcut(@PathVariable String shortcut) {
        return customerService.findByShortcut(shortcut);
    }
    @GetMapping("/findbynip/{NIP}")
    public List<Customer> findByNIP(@PathVariable String NIP) {
        return customerService.findByNIP(NIP);
    }
    @GetMapping("/findbycity/{city}")
    public List<Customer> findByCity(@PathVariable String city) {
        return customerService.findByCity(city);
    }


}
