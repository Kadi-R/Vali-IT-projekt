package ee.bcs.valiit.trikad.data;

import ee.bcs.valiit.trikad.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface UsersRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    User findByEmail(String email);


}
