package com.theironyard.entities;//Created by KevinBozic on 4/7/16.

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private String taskName;

    @ManyToOne
    private Provider provider;

    @ManyToOne
    private Request request;

    public Task() {
    }

    public Task(String taskName, Provider provider, Request request) {
        this.taskName = taskName;
        this.provider = provider;
        this.request = request;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }

    public Request getRequest() {
        return request;
    }

    public void setRequest(Request request) {
        this.request = request;
    }
}
