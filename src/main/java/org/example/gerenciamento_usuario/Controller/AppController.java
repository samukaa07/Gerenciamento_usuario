package org.example.gerenciamento_usuario.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {
    @RequestMapping(value = "/{path:^(?!api$).*}/**")
    public String forwardToIndex() {
        return "forward:/gerenciamento-usuario/index.html";
    }
}
