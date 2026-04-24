package com.example.demo.services;

import com.example.demo.models.UserModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    public List<UserModel> listUsers() {
        return List.of(
                new UserModel(1L, "Murilo Henrique", "murilo@email.com"),
                new UserModel(2L, "Ana Silva", "ana@email.com")
        );
    }
}
