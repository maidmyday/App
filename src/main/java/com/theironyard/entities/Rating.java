package com.theironyard.entities;//Created by KevinBozic on 4/6/16.

import javax.persistence.*;

@Entity
@Table (name = "ratings")
public class Rating {

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private double rating;

    @Column
    private String ratingComment;

    @ManyToOne
    private Client client;

    @ManyToOne
    private Provider provider;

    public Rating() {
    }

    public Rating(double rating, String ratingComment, Client client, Provider provider) {
        this.rating = rating;
        this.ratingComment = ratingComment;
        this.client = client;
        this.provider = provider;
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

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }
}

