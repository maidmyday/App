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

    public Task() {
    }

    public Task(String taskName) {
        this.taskName = taskName;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }
}
