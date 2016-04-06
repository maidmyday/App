package com.theironyard.services;

import com.theironyard.entities.Provider;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Caroline on 4/6/16.
 */
public interface ProviderRepository extends CrudRepository<Provider, Integer> {
}
