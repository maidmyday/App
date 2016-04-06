package com.theironyard.services;//Created by KevinBozic on 4/6/16.

import com.theironyard.entities.Request;
import org.springframework.data.repository.CrudRepository;

public interface RequestRepository extends CrudRepository<Request, Integer> {
}
