package SupportHub.controller;

import SupportHub.dto.LoginRequest;
import SupportHub.entity.Employee;
import SupportHub.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/auth")
public class LoginController {

    private final EmployeeRepository employeeRepository;

    public LoginController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        Employee employee = employeeRepository
                .findByEmail(request.getEmail())
                .orElse(null);

        if (employee != null &&
                employee.getPassword().equals(request.getPassword())) {

            return "Login successful";
        }

        return "Invalid email or password";
    }
}