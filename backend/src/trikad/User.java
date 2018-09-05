package trikad;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="user")
@Data
public class User extends BaseEntity{

    @Column(name="firstname")
    private String firstname;

    @Column(name="surname")
    private String surname;

    //Üle vaadata üle Spring Security
    @Column(name="password")
    private String password;

    @Column(name="email")
    private String email;
}
