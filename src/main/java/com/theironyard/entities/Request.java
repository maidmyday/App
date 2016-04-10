package com.theironyard.entities;//Created by KevinBozic on 4/6/16.

import javax.persistence.*;
import java.util.List;

@Entity
@Table (name = "requests")
public class Request {

    @Id
    @GeneratedValue
    private int id;

    @OneToMany
    private List<Task> tasks;

    public Request() {
    }

    public Request(Task task) {
        this.tasks = tasks;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
}
