package ee.bcs.valiit.trikad;

import ee.bcs.valiit.trikad.data.AppointmentsRepository;
import ee.bcs.valiit.trikad.data.UsersRepository;
import ee.bcs.valiit.trikad.model.Appointments;
import ee.bcs.valiit.trikad.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final UsersRepository usersrepository;
    private final AppointmentsRepository appointmentsrepository;

    @Autowired
    public DatabaseLoader(UsersRepository usersrepository, AppointmentsRepository appointmentsrepository) {
        this.usersrepository = usersrepository;
        this.appointmentsrepository = appointmentsrepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.usersrepository.save(new User("admin", "admin", "admin", "admin@admin.ee", true));
        this.appointmentsrepository.save(new Appointments("Hambaarst", new Date(), "Auk esimeses hambas"));
    }

}
