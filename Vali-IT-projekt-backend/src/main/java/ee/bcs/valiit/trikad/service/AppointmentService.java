package ee.bcs.valiit.trikad.service;

import ee.bcs.valiit.trikad.data.Appointments;
import ee.bcs.valiit.trikad.data.AppointmentsRepository;
import ee.bcs.valiit.trikad.data.UsersRepository;
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
