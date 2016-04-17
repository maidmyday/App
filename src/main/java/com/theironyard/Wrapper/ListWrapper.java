package com.theironyard.Wrapper;

import java.util.HashMap;

/**
 * Created by Caroline on 4/16/16.
 */
public class ListWrapper {
    private HashMap tasks = new HashMap ();

    public ListWrapper() {
    }

    public HashMap getTasks() {
        return tasks;
    }

    public void setTasks(HashMap tasks) {
        this.tasks = tasks;
    }
}
