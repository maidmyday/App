package com.theironyard.entities;//Created by KevinBozic on 4/6/16.

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table (name = "requests")
public class Request {

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private String address;

    @Column
    private String specialInstructions;

    @Column(nullable = false)
    private LocalDateTime requestDateTime;

    @Column(nullable = false)
    private boolean isDone;

    @OneToMany
    private List<Task> tasks;

    public Request() {
    }

    public Request(String address, String specialInstructions, LocalDateTime requestDateTime, boolean isDone, List<Task> tasks) {
        this.address = address;
        this.specialInstructions = specialInstructions;
        this.requestDateTime = requestDateTime;
        this.isDone = isDone;
        this.tasks = tasks;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSpecialInstructions() {
        return specialInstructions;
    }

    public void setSpecialInstructions(String specialInstructions) {
        this.specialInstructions = specialInstructions;
    }

    public LocalDateTime getRequestDateTime() {
        return requestDateTime;
    }

    public void setRequestDateTime(LocalDateTime requestDateTime) {
        this.requestDateTime = requestDateTime;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }
}
