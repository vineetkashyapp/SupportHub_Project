package SupportHub.controller;

import SupportHub.entity.Employee;
import SupportHub.repository.EmployeeRepository;
import SupportHub.entity.Ticket;
import SupportHub.repository.TicketRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/tickets")
public class TicketController {

    private final TicketRepository ticketRepository;
private final EmployeeRepository employeeRepository;

public TicketController(
        TicketRepository ticketRepository,
        EmployeeRepository employeeRepository) {

    this.ticketRepository = ticketRepository;
    this.employeeRepository = employeeRepository;
}

    @PostMapping
    public Ticket createTicket(@RequestBody Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    @GetMapping("/{id}")
    public Ticket getTicketById(@PathVariable Long id) {
        return ticketRepository.findById(id).orElse(null);
    }
    @PutMapping("/{id}/employee/{employeeId}")
public Ticket assignEmployee(
        @PathVariable Long id,
        @PathVariable Long employeeId) {

    Ticket ticket = ticketRepository.findById(id).orElse(null);
    Employee employee = employeeRepository.findById(employeeId).orElse(null);

    if (ticket != null && employee != null) {
        ticket.setEmployee(employee);
        return ticketRepository.save(ticket);
    }

    return null;
}
@PutMapping("/{id}/status")
public Ticket updateTicketStatus(
        @PathVariable Long id,
        @RequestParam String status) {

    Ticket ticket = ticketRepository.findById(id).orElse(null);

    if (ticket != null) {
        ticket.setStatus(status);
        return ticketRepository.save(ticket);
    }

    return null;
}
@DeleteMapping("/{id}")
public String deleteTicket(@PathVariable Long id) {

    if (ticketRepository.existsById(id)) {
        ticketRepository.deleteById(id);
        return "Ticket deleted successfully";
    }

    return "Ticket not found";
}
}