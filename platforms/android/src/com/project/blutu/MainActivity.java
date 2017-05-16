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
import android.app.Application;
import com.estimote.coresdk.service.BeaconManager;
import com.estimote.coresdk.service.BeaconManager;
import com.estimote.coresdk.recognition.packets.Nearable;
import android.util.Log;
import java.util.List;

import org.apache.cordova.*;





public class MainActivity extends CordovaActivity
{
    // appId & appToken provided by Estimote
    String appId;
    String appToken;
    private BeaconManager beaconManager;
    private static final String TAG = "Blutu";
    private String scanId;

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        Context applicationContext = getApplicationContext();

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }

        //Ahmad. Initializing estimoteSDK
        EstimoteSDK.initialize(applicationContext, appId, appToken);
        EstimoteSDK.enableDebugLogging(true);

        //Ahmad. Initializing BeaconManager for Sticker listener
        beaconManager = new BeaconManager(getApplicationContext());
        //Ahmad. Setting Sticker listener & Logging discovered Stickers
        beaconManager.setNearableListener(new BeaconManager.NearableListener() {
            @Override
            public void onNearablesDiscovered(List<Nearable> nearables) {
                Log.d(TAG, "Discovered nearables: " + nearables);
            }
        });

        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);
    }

    @Override
    public void onStart(){
        super.onStart();
        // Ahmad. Starting Sticker discovery
        beaconManager.connect(new BeaconManager.ServiceReadyCallback() {
            @Override
            public void onServiceReady() {
                beaconManager.startNearableDiscovery();
            }
        });
    }

    @Override
    protected void onStop() {
        super.onStop();
        beaconManager.stopNearableDiscovery();
    }

    @Override
    protected void onResume() {
        super.onResume();

        //Ahmad. Check if it's working. Check permissions
        SystemRequirementsChecker.checkWithDefaultDialogs(this);
        SystemRequirementsChecker requirementsChecker = new SystemRequirementsChecker();
        android.app.Activity activityForRequiremenst = new android.app.Activity();
        requirementsChecker.checkWithDefaultDialogs(activityForRequiremenst);
    }
}

