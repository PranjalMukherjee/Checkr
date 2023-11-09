package com.checkr.userservice.controller;

import com.checkr.userservice.dto.Auth;
import com.checkr.userservice.service.JwtService;
import com.checkr.userservice.dto.UserDto;
import com.checkr.userservice.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;



import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = {"http://localhost:3001","https://bc104-fe.fe-assignment.tk"},methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.PATCH})
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private JwtService jwtService;

    @GetMapping
    public List<UserDto> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public UserDto getById(@PathVariable("id") long id) {
        return userService.getById(id);
    }

    @GetMapping("/")
    public UserDto getUserByEmail(@RequestParam("email") String email){
        return userService.getUserByEmail(email);
    }
    @PostMapping("/")
    public UserDto add(@RequestBody UserDto newUser) {
        return userService.add(newUser);
    }

    @GetMapping("/users/validate")
    public String validateToken(@RequestParam("token") String token) {
        jwtService.validateToken(token);
        return "Token is valid";
    }

    @PostMapping("/token")
    public String getToken(@RequestBody Auth auth) {
        if (auth.getEmail() != null && auth.getPassword() != null) {
            if(getUserByEmail(auth.getEmail()) == null){
                UserDto user = new UserDto();
                user.setEmail(auth.getEmail());
                user.setPassword(auth.getPassword());
                add(user);
            }
            return jwtService.generateToken(auth.getEmail(), auth.getPassword());
        }
        else
            return "unable to generate token";
    }

    @PostMapping("/signIn/token")
    public String getSignInToken(@RequestBody Auth auth) {
        if (auth.getEmail() != null && auth.getPassword() != null) {
            return jwtService.generateToken(auth.getEmail(), auth.getPassword());
        }
        else
            return "unable to generate token";
    }
}