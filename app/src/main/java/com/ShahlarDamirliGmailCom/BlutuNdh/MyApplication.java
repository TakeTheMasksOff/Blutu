package com.ShahlarDamirliGmailCom.BlutuNdh;

import android.app.Application;
import android.content.Context;
import android.widget.Toast;

import com.estimote.coresdk.common.config.EstimoteSDK;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

//
// Running into any issues? Drop us an email to: contact@estimote.com
//

public class MyApplication extends Application {

    Toast toast;
    Context context;

    @Override
    public void onCreate() {
        super.onCreate();

        //toast = Toast.makeText(getApplicationContext(),"initializing EstimoteSDK",Toast.LENGTH_SHORT);


        EstimoteSDK.initialize(getApplicationContext(), "blutu-ndh", "059eae0af27d771bc121c0a35e4d7773");
        //toast = Toast.makeText(getApplicationContext(),"initialized",Toast.LENGTH_SHORT);


        // uncomment to enable debug-level logging
        // it's usually only a good idea when troubleshooting issues with the Estimote SDK
//        EstimoteSDK.enableDebugLogging(true);
    }
}
