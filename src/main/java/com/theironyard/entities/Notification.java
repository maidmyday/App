package com.theironyard.entities;//Created by KevinBozic on 4/6/16.

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table (name = "notifications")
public class Notification {

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private String notificationText;

    @Column(nullable = false)
    private LocalDateTime notificationDateTime;

    public Notification() {
    }

    public Notification(String notificationText, LocalDateTime notificationDateTime) {
        this.notificationText = notificationText;
        this.notificationDateTime = notificationDateTime;
    }

    public String getNotificationText() {
        return notificationText;
    }

    public void setNotificationText(String notificationText) {
        this.notificationText = notificationText;
    }

    public LocalDateTime getNotificationDateTime() {
        return notificationDateTime;
    }

    public void setNotificationDateTime(LocalDateTime notificationDateTime) {
        this.notificationDateTime = notificationDateTime;
    }
}
