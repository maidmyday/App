package com.theironyard.services;

import com.theironyard.entities.Job;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Caroline on 4/6/16.
 */
public interface JobRepository extends CrudRepository<Job, Integer> {
}
