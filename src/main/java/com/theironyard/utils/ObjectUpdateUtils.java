package com.theironyard.utils;

import com.theironyard.entities.Client;

/**
 * Created by Caroline on 4/13/16.
 */
public class ObjectUpdateUtils {

    public static Client updateClientObject(Client client, Client updates){

        String newfirstName = updates.getFirstName();
        String newLastName = updates.getLastName();
        String newEmail = updates.getEmail();
        String newPhoneNumber = updates.getPhoneNumber();

        if(!StringUtils.isEmptyOrNull(newfirstName)){
            client.setFirstName(newfirstName);
        }
        if(!StringUtils.isEmptyOrNull(newLastName)){
            client.setLastName(newLastName);
        }
        if(!StringUtils.isEmptyOrNull(newEmail)){
            client.setEmail(newEmail);
        }
        if(!StringUtils.isEmptyOrNull(newPhoneNumber)){
            client.setPhoneNumber(newPhoneNumber);
        }

        return client;

    }

}
