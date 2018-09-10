package ee.bcs.valiit.trikad.data;

import ee.bcs.valiit.trikad.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface RoleRepository extends JpaRepository {

    Role findByName(String name);
}
