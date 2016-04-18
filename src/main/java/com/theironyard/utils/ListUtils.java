package com.theironyard.utils;

import com.theironyard.entities.Provider;
import com.theironyard.entities.Task;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Caroline on 4/17/16.
 */
public class ListUtils {

    public static Boolean doesProviderContainTasks(List<String> clientTasks, List<Task> providerTasks){
        ArrayList<String> strList = getStringListFromTaskList(providerTasks);

        if(strList.containsAll(clientTasks)){
            return true;
        }
        return false;
    }

    private static ArrayList<String> getStringListFromTaskList (List<Task> list){
        ArrayList<String> strList = new ArrayList<String>();
        for(Task task : list){
            strList.add(task.getTaskName());
        }
        return strList;
    }

}
