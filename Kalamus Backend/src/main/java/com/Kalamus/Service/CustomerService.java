package com.Kalamus.Service;

import com.Kalamus.Entity.Customer;
import com.Kalamus.Entity.PH;
import com.Kalamus.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    public List<Customer> findAll(){
        return customerRepository.findAll();
    }

    public void save(Customer entity) {
        customerRepository.save(entity);
    }

    public void update(Customer entity) {
        customerRepository.save(entity);
    }

    public void deleteById(int id) {
        customerRepository.deleteById(id);
    }
}
