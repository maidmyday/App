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

    @ManyToOne
    private Client client;

    @ManyToOne
    private Provider provider;

    public Request() {
    }

    public Request(String address, String specialInstructions, LocalDateTime requestDateTime, boolean isDone, Client client, Provider provider) {
        this.address = address;
        this.specialInstructions = specialInstructions;
        this.requestDateTime = requestDateTime;
        this.isDone = isDone;
        this.client = client;
        this.provider = provider;
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

    public boolean getIsDone() {
        return isDone;
    }

    public void setIsDone(boolean done) {
        this.isDone = done;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }
}
