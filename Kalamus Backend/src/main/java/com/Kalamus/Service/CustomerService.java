package com.Kalamus.Service;

import com.Kalamus.Entity.Customer;
import com.Kalamus.Entity.PH;
import com.Kalamus.Repository.CustomerRepository;
<<<<<<< HEAD
import org.hibernate.exception.JDBCConnectionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.jdbc.core.JdbcTemplate;
=======
import org.springframework.beans.factory.annotation.Autowired;
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;
<<<<<<< HEAD
    @Autowired
    JdbcTemplate jdbcTemplate;
=======
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2

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
<<<<<<< HEAD


=======
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2
}
