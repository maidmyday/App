package com.theironyard.utils;

/**
 * Created by Caroline on 4/13/16.
 */
public class StringUtils {

    public static boolean isEmptyOrNull(String str){
        if(str == null){
            return true;
        }else if (str.trim().equalsIgnoreCase("")){
            return true;
        }
        return false;
    }

}
