package com.theironyard.controllers;

import com.theironyard.entities.*;
import com.theironyard.services.*;
import com.theironyard.utils.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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

        if (clientRepository.count() == 0) {
            Client client1 = new Client("Kevin", "Bacon", "1234", "kbacon@sizzling.com", "843-123-4567");
            clientRepository.save(client1);
        }
        if (clientRepository.count() == 1) {
            Client client2 = new Client("Clint", "Bozic", "1234", "kbacon@sizzling.com", "843-123-4567");
            clientRepository.save(client2);
        }
        if (providerRepository.count() == 0) {
            Provider provider = new Provider("Caroline", "Vail", "1234", "carolineevail@gmail.com", "334-669-5482");
            providerRepository.save(provider);
        }
        if (providerRepository.count() == 1) {
            Provider provider = new Provider("Zach", "Owens", "1234", "carolineevail@gmail.com", "334-669-5482");
            providerRepository.save(provider);
        }
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

    // returns a single client
    @RequestMapping(path = "/client/{id}", method = RequestMethod.GET)
    public Client loginClient(HttpSession session, @PathVariable ("id") int id) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {

        Client client = clientRepository.findOne(id);

        return client;
    }

    // returns all clients
    @RequestMapping(path = "/clients", method = RequestMethod.GET)
    public List<Client> allClients(HttpSession session) {
        return (List<Client>) clientRepository.findAll();
    }

    @RequestMapping(path = "/client", method = RequestMethod.PUT)
    public Client editClient(@RequestBody Client client, HttpSession session) throws Exception {

        if (client.getEmail().equals(session.getAttribute("email"))) {
            return clientRepository.save(client);
        } else {
            throw new Exception("You're not allowed to edit others' profiles.");
        }
    }

    @RequestMapping(path = "/client/request", method = RequestMethod.GET)
    public List<Request> clientServiceHistory(HttpSession session) {
        String clientEmail = (String) session.getAttribute("email");
        Client client = clientRepository.findByEmail(clientEmail);
        List<Request> localRequests = requestRepository.findByClient(client);
        return localRequests;
    }

    @RequestMapping(path = "/client/rating", method = RequestMethod.GET)
    public List<Rating> viewClientRatings(HttpSession session) {
        String clientEmail = (String) session.getAttribute("email");
        Client client = clientRepository.findByEmail(clientEmail);
        List<Rating> localRatings = ratingRepository.findByClient(client);
        return localRatings;
    }

    @RequestMapping(path = "/client", method = RequestMethod.DELETE)
    public void deleteClient(@RequestBody Client client) {
        clientRepository.delete(client);
    }



    // returns a single provider
    @RequestMapping(path = "/provider/{id}", method = RequestMethod.GET)
    public Provider loginProvider(HttpSession session, @PathVariable ("id") int id) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {

        Provider provider = providerRepository.findOne(id);

        return provider;

    }

    // returns all providers
    @RequestMapping(path = "/providers", method = RequestMethod.GET)
    public List<Provider> allProviders(HttpSession session) {

        return (List<Provider>) providerRepository.findAll();

    }

    @RequestMapping(path = "/provider", method = RequestMethod.POST)
    public Provider createProvider(@RequestBody Provider provider) throws PasswordStorage.CannotPerformOperationException {

        provider.setPassword(PasswordStorage.createHash(provider.getPassword()));

        return providerRepository.save(provider);
    }

    @RequestMapping(path = "/provider", method = RequestMethod.GET)
    public Provider findProvider() {
        return null;
    }

//    @RequestMapping(path = "/provider/{id}", method = RequestMethod.GET)
//    public Provider clientViewProviderProfile() {
//        return null;
//    }

//    @RequestMapping(path = "/provider/profile", method = RequestMethod.GET)
//    public Provider providerProfile(HttpSession session) {
//        Provider provider =
//        return provider;
//    }

    @RequestMapping(path = "/provider", method = RequestMethod.PUT)
    public Provider editProfile(@RequestBody Provider provider, HttpSession session) throws Exception {

        if (provider.getEmail().equals(session.getAttribute("email"))) {
            return providerRepository.save(provider);
        } else {
            throw new Exception("You're not allowed to edit others' profiles.");
        }
    }

    @RequestMapping(path = "/provider/task", method = RequestMethod.PUT)
    public Provider providerSelectTasks() {
        return null;
    }

    @RequestMapping(path = "/request", method = RequestMethod.POST)
    public Request createRequest() {
        return null;
    }

    @RequestMapping(path = "/request/{id}", method = RequestMethod.DELETE)
    public Request deleteRequest() {
        return null;
    }

    @RequestMapping(path = "/provider/request", method = RequestMethod.GET)
    public List<Request> providerServiceHistory(HttpSession session) {
        String providerEmail = (String) session.getAttribute("email");
        Provider provider = providerRepository.findByEmail(providerEmail);
        List<Request> localRequests = requestRepository.findByProvider(provider);
        return localRequests;
    }

    @RequestMapping(path = "/provider/rating", method = RequestMethod.GET)
    public List<Rating> viewProviderRatings(HttpSession session) {
        String providerEmail = (String) session.getAttribute("email");
        Provider provider = providerRepository.findByEmail(providerEmail);
        List<Rating> localRatings = ratingRepository.findByProvider(provider);
        return localRatings;
    }

    @RequestMapping(path = "/provider", method = RequestMethod.DELETE)
    public void deleteProvider(@RequestBody Provider provider) {
        providerRepository.delete(provider);
    }



    @RequestMapping(path = "/notification", method = RequestMethod.POST)
    public Notification createNotification() {
        return null;
    }

    @RequestMapping(path = "/notification", method = RequestMethod.GET)
    public Notification viewNotifications() {
        return null;
    }

    @RequestMapping(path = "/notification", method = RequestMethod.DELETE)
    public Notification deleteNotification() {
        return null;
    }



    @RequestMapping(path = "/task", method = RequestMethod.GET)
    public Task populateTasks() {
        return null;
    }



    @RequestMapping(path = "/rating", method = RequestMethod.POST)
    public Rating createRating() {
        return null;
    }
}
