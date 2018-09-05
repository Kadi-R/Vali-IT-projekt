package trikad;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="appointments")
@Data
public class Appointments extends BaseEntity {


    @Column(name="event_name")
    private String eventname;

    @Column(name="time")
    private Date time;


    @Column(name="description")
    private String description;

}
