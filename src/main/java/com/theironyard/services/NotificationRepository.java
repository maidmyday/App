package com.theironyard.services;//Created by KevinBozic on 4/6/16.

import com.theironyard.entities.Notification;
import org.springframework.data.repository.CrudRepository;

public interface NotificationRepository extends CrudRepository<Notification, Integer> {
}
