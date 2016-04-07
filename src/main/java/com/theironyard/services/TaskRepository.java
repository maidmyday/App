package com.theironyard.services;//Created by KevinBozic on 4/7/16.

import com.theironyard.entities.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Integer> {

}
