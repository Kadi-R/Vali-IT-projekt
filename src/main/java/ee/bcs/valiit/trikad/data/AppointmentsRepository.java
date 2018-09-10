package ee.bcs.valiit.trikad.data;

import ee.bcs.valiit.trikad.model.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface AppointmentsRepository extends JpaRepository {

    List<Appointments> findByUserId(Long id);
    Appointments findById(Long id);

}
