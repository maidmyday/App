package com.theironyard.services;//Created by KevinBozic on 4/6/16.

import com.theironyard.entities.Client;
import com.theironyard.entities.Provider;
import com.theironyard.entities.ClientRating;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ClientRatingRepository extends CrudRepository<ClientRating, Integer> {
    List<ClientRating> findByClient (Client client);
    List<ClientRating> findByProvider (Provider provider);
}
