package com.Kalamus.Service;

import com.Kalamus.Entity.PH;
import com.Kalamus.Repository.PHRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PHService {
    @Autowired
    PHRepository phRepository;

    public List<PH> findAll(){
        return phRepository.findAll();
    }

    public void save(PH entity) {
        phRepository.save(entity);
    }

    public void update(PH entity) {
        phRepository.save(entity);
    }

    public void deleteById(int id) {
        phRepository.deleteById(id);
    }
}
