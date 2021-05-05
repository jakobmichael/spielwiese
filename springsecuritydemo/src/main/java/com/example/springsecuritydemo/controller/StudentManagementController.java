package com.example.springsecuritydemo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

import com.example.springsecuritydemo.model.Student;

@RestController
@RequestMapping("management/api/v1/students")
public class StudentManagementController {

    private static final List<Student> studentsList = Arrays.asList(new Student(1, "James Bond"),
            new Student(2, "Ada Lovelace"), new Student(3, "Rosa Parks"));

//@PreAuthorize("hasRole('ROLE_')" / "hasAnyRole('ROLE_')" / "hasAuthority('permission')" / "hasAnyAuthority('permissions')")
//alternative to whitelisting endpoits with antMatchers(), needs @EnableGlobalMethodSecurity(prePostEnabled = true) at top of security config

    @GetMapping
    public List<Student> getAllStudents() {
        return studentsList;
    }

    @PostMapping
    public void registerNewStudent(Student student) {
        System.out.println("registerNewStudent");
    }

    @DeleteMapping(path = "{studentId}")
    public void deleteStudent(@PathVariable("studentId") Integer studentId) {
        System.out.println("deleteStudent");
    }

    @PutMapping(path = "{studentId}")
    public void updateStudent(@PathVariable("studentId") Integer studentId, @RequestBody Student student) {
        System.out.println("updateStudent");
    }
}
