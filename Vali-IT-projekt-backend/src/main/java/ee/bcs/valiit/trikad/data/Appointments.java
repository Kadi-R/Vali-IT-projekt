package ee.bcs.valiit.trikad.data;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="appointments")
@Data
@EqualsAndHashCode(callSuper = true)
public class Appointments extends BaseEntity {


    @Column(name="event_name")
    private String eventname;

    @Column(name="time")
    private Date time;


    @Column(name="description")
    private String description;

}
