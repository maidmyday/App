package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by Caroline on 4/12/16.
 */
@Entity
@Table(name = "providerRatings")
public class ProviderRating {

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private double rating;

    @Column
    private String ratingComment;

    @ManyToOne
    private Provider provider;

    public ProviderRating() {
    }

    public ProviderRating(double rating, String ratingComment, Provider provider) {
        this.rating = rating;
        this.ratingComment = ratingComment;
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

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }
}


