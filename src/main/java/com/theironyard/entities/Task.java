package com.theironyard.entities;//Created by KevinBozic on 4/7/16.

import com.fasterxml.jackson.annotation.JsonIgnore;

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
    @JsonIgnore
    private Provider provider;

    @ManyToOne
    @JsonIgnore
    private Client client;

    @ManyToOne
    @JsonIgnore
    private Request request;

    public Task() {
    }

    public Task(String taskName) {
        this.taskName = taskName;
    }

    public Task(String taskName, Provider provider, Request request) {
        this.taskName = taskName;
        this.provider = provider;
        this.request = request;
    }

    public Task(String taskName, Client client, Request request) {
        this.taskName = taskName;
        this.client = client;
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

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
