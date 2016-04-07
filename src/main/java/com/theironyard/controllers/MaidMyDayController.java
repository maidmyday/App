package com.theironyard.controllers;

import com.theironyard.entities.Client;
import com.theironyard.entities.Provider;
import com.theironyard.services.*;
import com.theironyard.utils.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by Caroline on 4/5/16.
 */




@RestController
public class MaidMyDayController {
    @Autowired
    ClientRepository clientRepository;
    @Autowired
    JobRepository jobRepository;
    @Autowired
    NotificationRepository notificationRepository;
    @Autowired
    ProviderRepository providerRepository;
    @Autowired
    RatingRepository ratingRepository;
    @Autowired
    RequestRepository requestRepository;

    Server dbui = null;

    ArrayList<Client> clients = new ArrayList<>();
    ArrayList<Provider> providers = new ArrayList<>();


    @PostConstruct
    public void init() throws SQLException {
        dbui = Server.createWebServer().start();
        Client client = new Client("Kevin", "Bacon", "1234", "kbacon@sizzling.com", "843-123-4567");
        clients.add(client);
        Provider provider = new Provider("Caroline", "Vail", "1234", "carolineevail@gmail.com", "334-669-5482");
        providers.add(provider);

    }

    @PreDestroy
    public void preDestory() {
        dbui.stop();
    }




    @RequestMapping(path = "/client", method = RequestMethod.POST)
    public Client createClient(@RequestBody Client client) throws PasswordStorage.CannotPerformOperationException {

        client.setPassword(PasswordStorage.createHash(client.getPassword()));

        return clientRepository.save(client);
    }

    @RequestMapping(path = "/provider", method = RequestMethod.POST)
    public Provider createProvider(@RequestBody Provider provider) throws PasswordStorage.CannotPerformOperationException {

        provider.setPassword(PasswordStorage.createHash(provider.getPassword()));

        return providerRepository.save(provider);
    }

    @RequestMapping(path = "/client", method = RequestMethod.GET)
    public Client loginClient(HttpSession session, @RequestBody HashMap data) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {

        Client client = clientRepository.findByEmail("email");

        if (client != null && PasswordStorage.verifyPassword((String) data.get("password"), client.getPassword())) {
            session.setAttribute("email", client.getEmail());
            return client;
        } else {
            return null;
        }
    }

    @RequestMapping(path = "/provider", method = RequestMethod.GET)
    public Provider loginProvider(HttpSession session, @RequestBody HashMap data) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {

        Provider provider = providerRepository.findByEmail("email");

        if (provider != null && PasswordStorage.verifyPassword((String) data.get("password"), provider.getPassword())) {
            session.setAttribute("email", provider.getEmail());
            return provider;
        } else {
            return null;
        }

    }
}
