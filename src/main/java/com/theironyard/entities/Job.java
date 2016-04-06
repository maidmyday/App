package com.theironyard.entities;//Created by KevinBozic on 4/6/16.

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "jobs")
public class Job {

    @Id
    @GeneratedValue
    private int id;

    public Job() {
    }
}
