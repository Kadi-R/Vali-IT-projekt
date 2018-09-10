package ee.bcs.valiit.trikad;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan ({"ee.bcs.valiit.trikad.data", "ee.bcs.valiit.trikad.service","ee.bcs.valiit.trikad.model", "ee.bcs.valiit.trikad.controller"})
public class TrikadApplication {

    public static void main(String[] args) {
        SpringApplication.run(TrikadApplication.class, args);
    }
}
