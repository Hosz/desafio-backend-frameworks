package com.example.demo.controllers;

import com.example.demo.models.UserModel;
import com.example.demo.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
public class UserController {
    private final UserService userService;

    @GetMapping("/health")
    @ResponseStatus(HttpStatus.OK)
    public void health() {
    }

    @GetMapping("/users")
    public List<UserModel> listUsers() {
        return userService.listUsers();
    }

    @GetMapping("/users/example")
    public UserModel getExampleUser() {
        return userService.listUsers().getFirst();
    }
}
