package com.theironyard.services;//Created by KevinBozic on 4/6/16.

import com.theironyard.entities.Task;
import org.springframework.data.repository.CrudRepository;

public interface JobRepository extends CrudRepository<Task, Integer> {
}
