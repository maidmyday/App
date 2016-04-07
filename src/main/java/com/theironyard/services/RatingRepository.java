package com.theironyard.services;//Created by KevinBozic on 4/6/16.

import com.theironyard.entities.Rating;
import org.springframework.data.repository.CrudRepository;

public interface RatingRepository extends CrudRepository<Rating, Integer> {
}
