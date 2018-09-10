package ee.bcs.valiit.trikad.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="appointments")
@Data
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class Appointments extends BaseEntity {

    public Appointments() {
    }

    public Appointments(String eventname, Date time, String description) {
        this.eventname = eventname;
        this.time = time;
        this.description = description;
    }

    @Column(name="event_name")
    private String eventname;

    @Column(name="time")
    private Date time;


    @Column(name="description")
    private String description;

}
