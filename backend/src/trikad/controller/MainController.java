package trikad.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {

    @GetMapping("/home")
    public String home() {return "/webapp/static/index.html";}
}
