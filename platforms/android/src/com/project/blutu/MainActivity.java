/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.project.blutu;


import android.content.Context;
import android.os.Bundle;
import com.estimote.coresdk.common.config.EstimoteSDK;
import com.estimote.coresdk.common.requirements.SystemRequirementsChecker;

import org.apache.cordova.*;


public class MainActivity extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        Context applicationContext = getApplicationContext();
        // appId & appToken provided by Estimote
        String appId;
        String appToken;

        super.onCreate(savedInstanceState);

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }

        //Ahmad. Initializing estimoteSDK
        EstimoteSDK.initialize(applicationContext, appId, appToken);
        EstimoteSDK.enableDebugLogging(true);

        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);
    }


    @Override
    protected void onResume() {
        super.onResume();

        //Ahmad. Check if it's working
        SystemRequirementsChecker.checkWithDefaultDialogs(this);
        SystemRequirementsChecker requirementsChecker = new SystemRequirementsChecker();
        android.app.Activity activityForRequiremenst = new android.app.Activity();
        requirementsChecker.checkWithDefaultDialogs(activityForRequiremenst);
    }
}
