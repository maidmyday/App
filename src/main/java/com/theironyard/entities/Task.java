package com.theironyard.entities;//Created by KevinBozic on 4/6/16.

import javax.persistence.*;

@Entity
@Table (name = "tasks")
public class Task {

    @Id
    @GeneratedValue
    private int id;


    public Task() {
    }
}
