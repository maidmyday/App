package com.theironyard.services;//Created by KevinBozic on 4/7/16.

import com.theironyard.entities.Provider;
import com.theironyard.entities.Task;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Integer> {
    public List<Task> findByProvider (Provider provider);
}
