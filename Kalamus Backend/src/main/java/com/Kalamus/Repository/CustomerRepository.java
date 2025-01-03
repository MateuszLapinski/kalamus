package com.Kalamus.Repository;

import com.Kalamus.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    List<Customer> findByNameContaining(@Param("userName") String userName);


    List<Customer> findByShortcutContaining(@Param("userShortcut") String userShortcut);

    List<Customer> findByNIPContaining(String nip);
    List<Customer> findByCityContaining(String city);

}
