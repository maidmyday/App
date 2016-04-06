package com.theironyard.services;

import com.theironyard.entities.Rating;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Caroline on 4/6/16.
 */
public interface RatingRepository extends CrudRepository<Rating, Integer> {
}
