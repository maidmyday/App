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
import java.time.LocalDateTime;
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
    ClientRatingRepository clientRatingRepository;
    @Autowired
    RequestRepository requestRepository;
    @Autowired
    TaskRepository taskRepository;
    @Autowired
    ProviderRatingRepository providerRatingRepository;

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
            Provider provider1 = new Provider("Caroline", "Vail", "1234", "carolineevail@gmail.com", "334-669-5482");
            providerRepository.save(provider1);
        }
        if (providerRepository.count() == 1) {
            Provider provider2 = new Provider("Zach", "Owens", "1234", "carolineevail@gmail.com", "334-669-5482");
            providerRepository.save(provider2);
        }
    }

    @PreDestroy
    public void preDestory() {
        dbui.stop();
    }





    @RequestMapping(path = "/clientLogin", method = RequestMethod.POST)
    public Client login(HttpSession session, @RequestBody Client client) throws Exception {

        Client newClient = clientRepository.findByEmail(client.getEmail());

        if (client != null && PasswordStorage.verifyPassword(client.getPassword() , newClient.getPassword())) {
            session.setAttribute("email", client.getEmail());
            return newClient;
        } else {
            throw new Exception("Login failed.");
        }
    }

    @RequestMapping(path = "/client", method = RequestMethod.POST)
    public Client createClient(@RequestBody Client client) throws PasswordStorage.CannotPerformOperationException {
        client.setPassword(PasswordStorage.createHash(client.getPassword()));
        clientRepository.save(client);
        return client;
    }

    // returns a single client
    @RequestMapping(path = "/client/{id}", method = RequestMethod.GET)
    public Client getOneClient(HttpSession session, @PathVariable ("id") int id) {
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
        String clientEmail = (String) session.getAttribute("email");
        clientRepository.findByEmail(clientEmail);
        clientRepository.save(client);
        return client;
//        if (client.getEmail().equals(session.getAttribute("email"))) {
//            return clientRepository.save(client);
//        } else {
//            throw new Exception("You're not allowed to edit others' profiles.");
//        }
    }

    @RequestMapping(path = "/client/request", method = RequestMethod.GET)
    public List<Request> clientServiceHistory(HttpSession session) {
        String clientEmail = (String) session.getAttribute("email");
        Client client = clientRepository.findByEmail(clientEmail);
        List<Request> localRequests = requestRepository.findByClient(client);
        return localRequests;
    }

    @RequestMapping(path = "/client/rating", method = RequestMethod.GET)
    public List<ClientRating> viewClientRatings(HttpSession session) {
        String clientEmail = (String) session.getAttribute("email");
        Client client = clientRepository.findByEmail(clientEmail);
        List<ClientRating> localRatings = clientRatingRepository.findByClient(client);
        return localRatings;
    }

    @RequestMapping(path = "/client{id}", method = RequestMethod.DELETE)
    public void deleteClient(HttpSession session, @PathVariable ("id") int id) {
        Client client = clientRepository.findOne(id);
        clientRepository.delete(client);
    }

    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session) {
        session.invalidate();
    }







    @RequestMapping(path = "/providerLogin", method = RequestMethod.POST)
    public Provider login(HttpSession session, @RequestBody Provider provider) throws Exception {

        Provider newProvider = providerRepository.findByEmail(provider.getEmail());

        if (provider != null && PasswordStorage.verifyPassword(provider.getPassword() , newProvider.getPassword())) {
            session.setAttribute("email", provider.getEmail());
            return newProvider;
        } else {
            throw new Exception("Login failed.");
        }
    }

    // returns a single provider
    @RequestMapping(path = "/provider/{id}", method = RequestMethod.GET)
    public Provider viewingProviderProfile(HttpSession session, @PathVariable ("id") int id) {
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
        providerRepository.save(provider);
        return provider;
    }

    @RequestMapping(path = "/provider", method = RequestMethod.GET)
    public List<Provider> findMatchingProviders(@RequestBody List<Task> clientRequestedTasks) {
        List<Provider> providers = (List<Provider>) providerRepository.findAll();
        for (Provider provider : providers) {
            for (Task task : clientRequestedTasks) {
                if (!provider.getTasks().containsAll(clientRequestedTasks)) {
                    providers.remove(provider);
                }
            }
        }
        return providers;
    }

    @RequestMapping(path = "/provider/profile", method = RequestMethod.GET)
    public Provider providerProfile(HttpSession session) {
        String providerEmail = (String) session.getAttribute("email");
        Provider provider = providerRepository.findByEmail(providerEmail);
        return provider;
    }

    @RequestMapping(path = "/provider", method = RequestMethod.PUT)
    public Provider editProfile(@RequestBody Provider provider, HttpSession session) throws Exception {

        if (provider.getEmail().equals(session.getAttribute("email"))) {
            return providerRepository.save(provider);
        } else {
            throw new Exception("You're not allowed to edit others' profiles.");
        }
    }

    @RequestMapping(path = "/provider/task", method = RequestMethod.PUT)
    public void providerSelectTasks(@RequestBody Provider provider) {
        providerRepository.save(provider);
    }

    @RequestMapping(path = "/provider/request", method = RequestMethod.GET)
    public List<Request> providerServiceHistory(HttpSession session) {
        String providerEmail = (String) session.getAttribute("email");
        Provider provider = providerRepository.findByEmail(providerEmail);
        List<Request> localRequests = requestRepository.findByProvider(provider);
        return localRequests;
    }

    @RequestMapping(path = "/provider/rating", method = RequestMethod.GET)
    public List<ProviderRating> viewProviderRatings(HttpSession session) {
        String providerEmail = (String) session.getAttribute("email");
        Provider provider = providerRepository.findByEmail(providerEmail);
        List<ProviderRating> localRatings = providerRatingRepository.findByProvider(provider);
        return localRatings;
    }


    @RequestMapping(path = "/provider/{id}", method = RequestMethod.DELETE)
    public void deleteProvider(HttpSession session, @PathVariable ("id") int id) {
        Provider provider = providerRepository.findOne(id);
        providerRepository.delete(provider);
    }

    @RequestMapping(path = "/provider/{id}/isOnline", method = RequestMethod.PUT)
    public Provider toggleIsOnline(@PathVariable ("id") int id) {
        Provider provider = providerRepository.findOne(id);
        provider.setIsOnline(!provider.getIsOnline());
        providerRepository.save(provider);
        return provider;
    }






    @RequestMapping(path = "/request/provider/{id}", method = RequestMethod.POST)
    public void createRequest(@RequestBody Request request, HttpSession session, @PathVariable ("id") int id) {
        String clientEmail = (String) session.getAttribute("email");
        Client client = clientRepository.findByEmail(clientEmail);
        Provider provider = providerRepository.findOne(id);
        request.setRequestDateTime(LocalDateTime.now());
        request.setClient(client);
        request.setProvider(provider);
        requestRepository.save(request);
    }

    @RequestMapping(path = "/request/{id}", method = RequestMethod.DELETE)
    public void deleteRequest(@PathVariable ("id") int id) {
        requestRepository.delete(id);
    }





    @RequestMapping(path = "/notification", method = RequestMethod.POST)
    public void createNotification() {
    }

    @RequestMapping(path = "/notification", method = RequestMethod.GET)
    public Notification viewNotifications() {
        return null;
    }

    @RequestMapping(path = "/notification", method = RequestMethod.DELETE)
    public Notification deleteNotification() {
        return null;
    }





    @RequestMapping(path = "/rating/provider/{id}", method = RequestMethod.POST)
    public void createProviderRating(HttpSession session, @PathVariable ("id") int id, @RequestBody ProviderRating rating) {
        String clientEmail = (String) session.getAttribute("email");
        Client client = clientRepository.findByEmail(clientEmail);
        Provider provider = providerRepository.findOne(id);
        providerRatingRepository.save(rating);
    }

    @RequestMapping(path = "/rating/client/{id}", method = RequestMethod.POST)
    public void createClientRating(HttpSession session, @PathVariable ("id") int id, @RequestBody ClientRating rating) {
        String providerEmail = (String) session.getAttribute("email");
        Provider provider = providerRepository.findByEmail(providerEmail);
        Client client = clientRepository.findOne(id);
        clientRatingRepository.save(rating);
    }




    @RequestMapping(path = "/task", method = RequestMethod.GET)
    public Task populateTasks() {
        return null;
    }
}
