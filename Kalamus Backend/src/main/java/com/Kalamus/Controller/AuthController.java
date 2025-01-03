package com.Kalamus.Controller;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AuthController {

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        if ("admin".equals(request.getUsername()) && "admin".equals(request.getPassword())) {
            Map<String, String> response = new HashMap<>();
            response.put("token", "mocked-jwt-token");
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }

    @Setter
    @Getter
    public static class LoginRequest {
        private String username;
        private String password;

    }
}
