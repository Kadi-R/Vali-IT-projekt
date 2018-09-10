package ee.bcs.valiit.trikad.data;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface UserRoleRepository extends JpaRepository {
}
