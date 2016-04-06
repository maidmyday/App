package com.theironyard.services;

import com.theironyard.entities.Notification;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Caroline on 4/6/16.
 */
public interface NotificationRepository extends CrudRepository<Notification, Integer> {
}
