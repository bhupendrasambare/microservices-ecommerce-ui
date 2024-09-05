/**
 * author @bhupendrasambare
 * Date   :27/06/24
 * Time   :5:01 pm
 * Project:microservices-registry
 **/
package com.ecommerce.ui.config;
//

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SwaggerConfig {

    private String devUrl = "http://localhost:9006";

    @Bean
    public OpenAPI myOpenAPI() {
        Server devServer = new Server();
        devServer.setUrl(devUrl);
        devServer.setDescription("Ecommerce UI local environment");

        Contact contact = new Contact();
        contact.setEmail("bhupendrasam1404@gmail.com");
        contact.setName("Bhupendra sambare");
        contact.setUrl("https://bhupendrasambare.github.io/profile/");

        Info info = new Info()
                .title("Authentication service API")
                .version("1.0")
                .contact(contact)
                .description("This API exposes endpoints to manage tutorials.");

        return new OpenAPI().info(info).servers(List.of(devServer));
    }
}
