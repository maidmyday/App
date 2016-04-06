package com.theironyard.services;

import com.theironyard.entities.Client;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Caroline on 4/6/16.
 */
public interface ClientRepository extends CrudRepository<Client, Integer> {
}
