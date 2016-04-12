package com.theironyard;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.theironyard.entities.Client;
import com.theironyard.entities.Provider;
import com.theironyard.services.*;
import com.theironyard.utils.PasswordStorage;
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
                MockMvcRequestBuilders.post("/client")
                        .content(json)
                        .contentType("application/json")
        );
        Assert.assertTrue(clientRepository.count() == 3);
	}

    // creating a provider account
    @Test
    public void testB() throws Exception {
        Provider provider = new Provider("2asdf", "2asdf", PasswordStorage.createHash("2asdf"), "2asdf", "2asdf");

        //this is for creating JSON strings
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(provider);

        mockMvc.perform(
                MockMvcRequestBuilders.post("/provider")
                        .content(json)
                        .contentType("application/json")
        );
        Assert.assertTrue(providerRepository.count() == 3);
    }

//    @Test
//    public void testC() throws Exception {
//        Provider p = providerRepository.findByEmail("2asdf");
//
//        ObjectMapper mapper = new ObjectMapper();
//        String json = mapper.writeValueAsString(p);
//
//        mockMvc.perform(
//                MockMvcRequestBuilders.get("/provider/profile")
//                        .content(json)
//                        .contentType("application/json")
//        );
//        Assert.assertTrue(p == providerRepository.findOne(1));
//    }
//
//    // deleting client account
//    @Test
//    public void testZ() throws Exception {
//        Client c = clientRepository.findOne(1);
//
//        HashMap map = new HashMap();
//        map.put("id", 3);
//
//        ObjectMapper mapper = new ObjectMapper();
//        String json = mapper.writeValueAsString(map);
//
//
//        mockMvc.perform(perform
//                MockMvcRequestBuilders.delete("/mime/3")
//                        .content(json)
//                        .contentType("application/json")
//                        .sessionAttr("userName", "mimeman3")
//        );
//
//        Assert.assertTrue(clientRepository.findOne(1) == null);
//    }
}