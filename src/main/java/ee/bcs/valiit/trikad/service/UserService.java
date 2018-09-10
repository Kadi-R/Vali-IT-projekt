package ee.bcs.valiit.trikad.service;

import ee.bcs.valiit.trikad.data.*;
import ee.bcs.valiit.trikad.model.User;
import ee.bcs.valiit.trikad.model.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

    public User get(Long id) {
        return usersRepository.getOne(id);
    }

    public User findByUsername(String username) {
        return usersRepository.findByUsername(username);
    }

    public User findByEmail(String email) {
        return usersRepository.findByEmail(email);
    }

    @Transactional
    public User save(User user) {
        return usersRepository.save(user);
    }

    @Transactional
    public void register(User user) {
        userRoleRepository.save(new UserRole(usersRepository.save(user).getId(), roleRepository.findByName("trikad.user").getId()));
    }

    public List<User> list() {
        return usersRepository.findAll();
    }

}
