package ee.bcs.valiit.trikad.service;

import ee.bcs.valiit.trikad.model.Appointments;
import ee.bcs.valiit.trikad.data.AppointmentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentsRepository appointmentsRepository;

    public List list() {
        return appointmentsRepository.findAll();
    }

    public List<Appointments> findByUserId(Long id) {
        return appointmentsRepository.findByUserId(id);
    }
    public Appointments findById(Long id) {
        return appointmentsRepository.findById(id);
    }

    @Transactional
    public void delete(Appointments appointment) {
        appointmentsRepository.delete(appointment);
    }

    @Transactional
    public void add(Appointments appointment) {
        appointmentsRepository.save(appointment);
    }
}
