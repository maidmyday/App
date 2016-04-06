package com.theironyard;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.theironyard.entities.Client;
import com.theironyard.services.*;
import com.theironyard.utilities.PasswordStorage;
import org.junit.Assert;
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MaidMyDayApplication.class)
@WebAppConfiguration
@FixMethodOrder(MethodSorters.NAME_ASCENDING) //have to keep tests in alpha order
public class MaidMyDayApplicationTests {

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

    @Autowired
    WebApplicationContext wap;

    MockMvc mockMvc;

    @Before
    public void before() {
        //clientRepository.deleteAll();
        mockMvc = MockMvcBuilders.webAppContextSetup(wap).build();
    }

    // creating a client account
	@Test
	public void testA() throws Exception {
        Client client = new Client("asdf", "asdf", PasswordStorage.createHash("asdf"), "asdf", "asdf");

        //this is for creating JSON strings
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(client);

        mockMvc.perform(
                MockMvcRequestBuilders.post("/createClient")
                        .content(json)
                        .contentType("application/json")
                //.sessionAttr("username", "Alice")
        );
        Assert.assertTrue(clientRepository.count() == 1);
	}

}
