package com.theironyard.entities;//Created by KevinBozic on 4/6/16.

import javax.persistence.*;

@Entity
@Table (name = "clientRatings")
public class ClientRating {

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private double rating;

    @Column
    private String ratingComment;

    @ManyToOne
    private Client client;

    public ClientRating() {
    }

    public ClientRating(double rating, String ratingComment, Client client) {
        this.rating = rating;
        this.ratingComment = ratingComment;
        this.client = client;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getRatingComment() {
        return ratingComment;
    }

    public void setRatingComment(String ratingComment) {
        this.ratingComment = ratingComment;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}

