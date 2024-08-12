package com.Kalamus.Controller;

import com.Kalamus.Entity.PH;
import com.Kalamus.Service.PHService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ph")
public class PHController {
    @Autowired
    PHService phService;


    @GetMapping("/findAll")
    public List<PH> findAll(){
        return phService.findAll();
    }

}
