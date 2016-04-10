package com.theironyard.services;//Created by KevinBozic on 4/6/16.

import com.theironyard.entities.Client;
import com.theironyard.entities.Provider;
import com.theironyard.entities.Rating;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RatingRepository extends CrudRepository<Rating, Integer> {
    List<Rating> findbyClient (Client client);
    List<Rating> findbyProvider (Provider provider);
}
