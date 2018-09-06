package ee.bcs.valiit.trikad.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface UsersRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    User findByEmail(String email);


}
