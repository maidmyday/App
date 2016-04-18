package com.theironyard.services;//Created by KevinBozic on 4/6/16.

import com.theironyard.entities.Client;
import com.theironyard.entities.Provider;
import com.theironyard.entities.Request;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RequestRepository extends CrudRepository<Request, Integer> {
    List<Request> findByClient (Client client);
    List<Request> findByProvider (Provider provider);
    Request findFirstByProvider(Provider provider);
}
