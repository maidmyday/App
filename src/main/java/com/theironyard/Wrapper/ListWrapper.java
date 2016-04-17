package com.theironyard.Wrapper;

import com.theironyard.entities.Provider;

import java.util.HashMap;

/**
 * Created by Caroline on 4/16/16.
 */
public class ListWrapper {
    private Provider tasks = new Provider ();

    public ListWrapper() {
    }

    public Provider getTasks() {
        return tasks;
    }

    public void setTasks(Provider tasks) {
        this.tasks = tasks;
    }
}
