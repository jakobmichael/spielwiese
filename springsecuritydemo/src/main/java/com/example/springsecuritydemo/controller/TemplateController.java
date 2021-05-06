package com.example.springsecuritydemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class TemplateController {

    @GetMapping("/login")
    public String getLoginView() {
        return "login"; //referres to the template folder, getting the file called login.html
    }

    @GetMapping("/courses")
    public String getCourses() {
        return "courses"; //referres to the template folder, getting the file called login.html
    }

    
}
