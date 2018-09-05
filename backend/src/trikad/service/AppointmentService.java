package trikad.service;

import trikad.Appointments;
import trikad.AppointmentsRepository;
import trikad.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private UsersRepository userrepository;

    @Autowired
    private AppointmentsRepository appointmentRepository;

    public List<Appointments> list() {
        return appointmentRepository.findAll();
    }

    public Appointments get(Long id) {
        return appointmentRepository.getOne(id);
    }

    @Transactional
    public void delete(Appointments appointment) {
        appointmentRepository.delete(appointment);
    }

    @Transactional
    public void add(Appointments appointment) {
        appointmentRepository.save(appointment);
    }
}
