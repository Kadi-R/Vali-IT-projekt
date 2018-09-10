package ee.bcs.valiit.trikad.controller;

import ee.bcs.valiit.trikad.model.AuthenticatedUser;
import ee.bcs.valiit.trikad.model.User;
import ee.bcs.valiit.trikad.service.AppointmentService;
import ee.bcs.valiit.trikad.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
public class MainController {

    @Autowired
    private UserService userservice;

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("/home")
    public String home() {return "/webapp/static/index.html";}

    @RequestMapping("/login")
    public String login(@RequestParam(value = "error", required = false) String error, @RequestParam(value = "logout", required = false) String logout) {
        if (error != null) {
            return "/static/error.html";
        }
        if (logout != null) {
            return "/static/logout.html";
        }
        return "/static/login.html";
    }

    //Sisselogimine autentimisega
    @RequestMapping(value = "/user")
    @ResponseBody
    public AuthenticatedUser user() {
        AuthenticatedUser principal = new AuthenticatedUser();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userservice.findByUsername(authentication.getName());
        if (user != null) {
            principal.setId(user.getId());
            principal.setUsername(user.getEmail());
            principal.setName(user.getFirstname());
            principal.setEmail(user.getEmail());
            principal.setRoles(AuthorityUtils.authorityListToSet(authentication.getAuthorities()));
        }
        return principal;
    }

}
