package com.theironyard.controllers;

import com.theironyard.services.*;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.io.FileNotFoundException;
import java.sql.SQLException;

/**
 * Created by Caroline on 4/5/16.
 */
@RestController
public class MaidMyDayController {
    @Autowired
    ClientRepository clients;

    @Autowired
    JobRepository jobs;

    @Autowired
    NotificationRepository notifications;

    @Autowired
    ProviderRepository providers;

    @Autowired
    RatingRepository ratings;

    @Autowired
    RequestRepository requests;

    Server dbui = null;

    @PostConstruct
    public void init() throws SQLException, FileNotFoundException {
        dbui = Server.createWebServer().start();
    }
}
