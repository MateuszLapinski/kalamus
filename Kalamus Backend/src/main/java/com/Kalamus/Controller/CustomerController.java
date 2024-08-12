package com.Kalamus.Controller;

import com.Kalamus.Entity.Customer;
import com.Kalamus.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.CrossOrigin;
=======
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customer")
<<<<<<< HEAD
@CrossOrigin(origins = "http://localhost:5173")
=======
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2
public class CustomerController {

    @Autowired
    CustomerService customerService;
<<<<<<< HEAD
    @GetMapping("/all")
    public List<Customer> findAll() {
        return customerService.findAll();
    }

}

=======

    @GetMapping("/allsales")
    public List<Customer> findAll(){
        return customerService.findAll();
    }
}
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2
