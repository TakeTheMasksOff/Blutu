package com.ShahlarDamirliGmailCom.BlutuNdh;

import android.content.Context;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;


import com.estimote.coresdk.common.config.EstimoteSDK;
import com.estimote.coresdk.common.requirements.SystemRequirementsChecker;
import com.estimote.coresdk.service.BeaconManager;
import com.estimote.coresdk.recognition.packets.Nearable;

import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.List;
//
// Running into any issues? Drop us an email to: contact@estimote.com
//

public class MainActivity extends AppCompatActivity {

    private BeaconManager beaconManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        //setSupportActionBar(toolbar);

        final TextView textViewOX = (TextView) findViewById(R.id.textX);
        final TextView textViewOY = (TextView) findViewById(R.id.textY);
        final TextView textViewOZ = (TextView) findViewById(R.id.textZ);
        final TextView textViewMove = (TextView) findViewById(R.id.textMove);
        final TextView textViewT = (TextView) findViewById(R.id.textT);
        final ListView listNearables = (ListView) findViewById(R.id.lstNearebles);

        // Создаём пустой массив для хранения имен стикеров
        final ArrayList<String> stickersİD = new ArrayList<String>();

        //Ahmad. Initializing BeaconManager for Sticker listener
        beaconManager = new BeaconManager(getApplicationContext());
        //toast = Toast.makeText(getApplicationContext(),"BeaconManager",Toast.LENGTH_SHORT);

        //Ahmad. Setting Sticker listener & Logging discovered Stickers
        beaconManager.setNearableListener(new BeaconManager.NearableListener(){
            @Override
            public void onNearablesDiscovered(List<Nearable> nearables){
                //toast = Toast.makeText(getApplicationContext(),"stickersİD.clear",Toast.LENGTH_SHORT);
                stickersİD.clear();

                for (int i = 0; i<nearables.size(); i++)
                {
                    stickersİD.add(i,nearables.get(i).identifier + " t=" + nearables.get(i).temperature + " orientation="+ nearables.get(0).orientation.toString());
                }

                // Создаём адаптер ArrayAdapter, чтобы привязать массив к ListView
                final ArrayAdapter<String> adapter;

                Context applicationContext = getApplicationContext();

                //toast = Toast.makeText(getApplicationContext(),"new ArrayAdapter",Toast.LENGTH_SHORT);
                adapter = new ArrayAdapter<String>(applicationContext,
                        R.layout.my_list_item,stickersİD);

                // Привяжем массив через адаптер к ListView
                //toast = Toast.makeText(getApplicationContext(),"setAdapter",Toast.LENGTH_SHORT);
                listNearables.setAdapter(adapter);

                //toast = Toast.makeText(getApplicationContext(),"notifyDataSetChanged",Toast.LENGTH_SHORT);
                adapter.notifyDataSetChanged();

                if(nearables.size()>0) {
                    //Ahmad. Show temp and accelerations
                    textViewOX.setText(String.format("%.2f", nearables.get(0).xAcceleration));
                    textViewOY.setText(String.format("%.2f", nearables.get(0).yAcceleration));
                    textViewOZ.setText(String.format("%.2f", nearables.get(0).zAcceleration));

                    textViewT.setText(String.format("%.2f", nearables.get(0).temperature));
                    if (nearables.get(0).isMoving)
                        textViewMove.setText("Moving");
                    else
                        textViewMove.setText("Stop");
                }
            }
        });
    }

    @Override
    protected void onResume() {
        super.onResume();

        //toast = Toast.makeText(getApplicationContext(),"checkWithDefaultDialogs",Toast.LENGTH_SHORT);
        //Ahmad. Check if it's working. Check permissions
        boolean reqirements;
        reqirements = SystemRequirementsChecker.checkWithDefaultDialogs(this);
    }
    @Override
    protected void onStart() {
        super.onStart();

        //toast = Toast.makeText(getApplicationContext(),"startNearableDiscovery",Toast.LENGTH_SHORT);
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
        //toast = Toast.makeText(getApplicationContext(),"stopNearableDiscovery",Toast.LENGTH_SHORT);
        beaconManager.stopNearableDiscovery();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        //toast = Toast.makeText(getApplicationContext(),"beaconManager.disconnect",Toast.LENGTH_SHORT);
        beaconManager.disconnect();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
