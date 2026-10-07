package SupportHub.controller;

import SupportHub.entity.Employee;
import SupportHub.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    @GetMapping("/{id}")
public Employee getEmployeeById(@PathVariable Long id) {
    return employeeRepository.findById(id).orElse(null);
}
@PutMapping("/{id}")
public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
    Employee existingEmployee = employeeRepository.findById(id).orElse(null);

    if (existingEmployee != null) {
        existingEmployee.setName(employee.getName());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setPassword(employee.getPassword());

        return employeeRepository.save(existingEmployee);
    }

    return null;
}
@DeleteMapping("/{id}")
public String deleteEmployee(@PathVariable Long id) {
    if (employeeRepository.existsById(id)) {
        employeeRepository.deleteById(id);
        return "Employee deleted successfully";
    }

    return "Employee not found";
}
}