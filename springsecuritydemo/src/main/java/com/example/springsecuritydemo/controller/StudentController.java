package com.example.springsecuritydemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

import com.example.springsecuritydemo.model.Student;

@RestController
@RequestMapping("api/v1/students")
public class StudentController {

    private static final List<Student> studentsList = Arrays.asList(new Student(1, "James Bond"),
            new Student(2, "Ada Lovelace"), new Student(3, "Rosa Parks"));

    @GetMapping(path = "{studentId}")
    public Student getStudent(@PathVariable("studentId") Integer studentId) {
        return studentsList.stream().filter(student -> studentId.equals(student.getStudentId())).findFirst()
                .orElseThrow(() -> new IllegalStateException("Student " + studentId + " does not exist!"));
    }
}
