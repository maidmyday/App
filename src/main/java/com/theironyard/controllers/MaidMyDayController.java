package com.theironyard.controllers;

import com.theironyard.entities.Client;
import com.theironyard.entities.Provider;
import com.theironyard.services.*;
import com.theironyard.utilities.PasswordStorage;
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
import java.util.HashMap;

/**
 * Created by Caroline on 4/5/16.
 */

@RestController
public class MaidMyDayController {
    @Autowired
    ClientRepository clientRepository;
    @Autowired
    NotificationRepository notificationRepository;
    @Autowired
    ProviderRepository providerRepository;
    @Autowired
    RatingRepository ratingRepository;
    @Autowired
    RequestRepository requestRepository;
    @Autowired
    TaskRepository taskRepository;

    Server dbui = null;

    @PostConstruct
    public void init() throws SQLException {
        dbui = Server.createWebServer().start();
    }

    @PreDestroy
    public void preDestory() {
        dbui.stop();
    }


    // implement enum for both the provider class and client class ????


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
