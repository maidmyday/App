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

    public Rating() {
    }

    public Rating(double rating, String ratingComment) {
        this.rating = rating;
        this.ratingComment = ratingComment;
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
}

