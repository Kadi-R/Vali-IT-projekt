package trikad.controller;


import trikad.Appointments;
import trikad.service.AppointmentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping(value = "/app")
@Slf4j
public class AppointmentController {

    @Autowired
    AppointmentService appointmentService;


    @PostMapping("/add")
    private void add(@RequestParam String event_name, @RequestParam Date time, @RequestParam String description) {
        Appointments app = new Appointments();
        app.setEventname(event_name);
        app.setTime(time);
        app.setDescription(description);
        appointmentService.add(app);
    }

    @PostMapping(value = "/delete/{id}", produces="application/json")
    private void delete(@PathVariable Long id) {
        Appointments app = appointmentService.get(id);
        appointmentService.delete(app);
    }

    @PostMapping("/update")
    private void update() {

    }
}
