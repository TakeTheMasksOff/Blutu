package com.ShahlarDamirliGmailCom.BlutuNdh;

import android.webkit.JavascriptInterface;

public class MyNeareable{
    String Id;
    String orientation;
    boolean isMoving;
    long currentMotionStateDuration; // Time since last change of motion state in seconds
    long lastMotionStateDuration;

    public void Settings( String Id, String orientation, boolean isMoving,
                       long currentMotionStateDuration, long lastMotionStateDuration){
        this.Id = Id;
        this.orientation = orientation;
        this.isMoving = isMoving;
        this.currentMotionStateDuration = currentMotionStateDuration;
        this.lastMotionStateDuration =  lastMotionStateDuration;
    }

    @JavascriptInterface
    public String getJson(String jsonString){
        return jsonString;
    }

}
