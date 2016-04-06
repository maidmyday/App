package com.theironyard.services;

import com.theironyard.entities.Request;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Caroline on 4/6/16.
 */
public interface RequestRepository extends CrudRepository<Request, Integer> {
}
