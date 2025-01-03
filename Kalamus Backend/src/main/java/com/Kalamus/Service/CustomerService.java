package com.Kalamus.Service;

import com.Kalamus.Entity.Customer;
import com.Kalamus.Repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    JdbcTemplate jdbcTemplate;


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


    public List<Customer> findByName(String userName) {
        return customerRepository.findByNameContaining(userName);}

    public List<Customer> findByShortcut(String userShortcut) {
        return customerRepository.findByShortcutContaining(userShortcut);}


    public List<Customer> findByNIP(String nip) {
        return customerRepository.findByNIPContaining(nip);
    }

    public List<Customer> findByCity(String city) {
        return customerRepository.findByCityContaining(city);
    }
}
