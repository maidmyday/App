package com.theironyard.services;

import com.theironyard.entities.ClientRating;
import com.theironyard.entities.Provider;
import com.theironyard.entities.ProviderRating;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Caroline on 4/12/16.
 */
public interface ProviderRatingRepository extends CrudRepository<ProviderRating, Integer> {
    List<ProviderRating> findByProvider (Provider provider);
}
