package com.theironyard.services;//Created by KevinBozic on 4/6/16.

import com.theironyard.entities.Client;
import com.theironyard.entities.Provider;
import org.springframework.data.repository.CrudRepository;

public interface ProviderRepository extends CrudRepository<Provider, Integer> {
    Provider findByEmail(String email);
}
