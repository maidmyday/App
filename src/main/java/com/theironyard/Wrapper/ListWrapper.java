package com.theironyard.Wrapper;

import com.theironyard.entities.Task;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by Caroline on 4/16/16.
 */
public class ListWrapper {
    private ArrayList<Task> tasks = new ArrayList<Task>();

    public ListWrapper() {
    }

    public ArrayList<Task> getTasks() {
        return tasks;
    }

    public void setTasks(ArrayList<Task> tasks) {
        this.tasks = tasks;
    }
}
