package com.ShahlarDamirliGmailCom.BlutuNdh;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Toast;

import com.estimote.coresdk.common.config.EstimoteSDK;
import com.estimote.coresdk.common.requirements.SystemRequirementsChecker;
import com.google.gson.Gson;
import com.estimote.coresdk.service.BeaconManager;
import com.estimote.coresdk.recognition.packets.Nearable;

import java.io.File;
import java.util.ArrayList;
import java.util.List;


public class MainActivity extends AppCompatActivity {

    private BeaconManager beaconManager;
    public Gson gsonObj;
    public MyNeareable[] jsPassingInfo;
    public int maxStickerCount=10; //maximum count of stickers interacting with this "reciever"
    public ArrayList<MyNeareable> myNeareablesList;
    public MyNeareable myNeareable;
    public String json;
    public WebView webView;
    public boolean jsPossible;
    private Context applicationContext;
    private int MY_PERMISSIONS_REQUEST_READ_EXTERNAL=1;
    private int canWorkWithStickers;
    public Blutu blutu;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        canWorkWithStickers =0;

        applicationContext = getApplicationContext();

        AllowExternalStorage();
        if (canWorkWithStickers==1)
            WorkWithStickers();
    }

    /*
        Confugures WebView and loads index.html
     */
    private void initWebView(){

        webView = (WebView) findViewById(R.id.WebView);

        webView.getSettings().setJavaScriptEnabled(true);

        webView.getSettings().setDomStorageEnabled(true);

        webView.getSettings().setAllowFileAccess(true);
        webView.getSettings().setAllowUniversalAccessFromFileURLs(true);

        //webView.getSettings().setAppCacheEnabled(true);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            WebView.setWebContentsDebuggingEnabled(true);
        }

        /*
        makes the Webview have a normal viewport (such as a normal desktop browser)
        */
        webView.getSettings().setUseWideViewPort(false);

        /*
            loads the WebView completely zoomed out
         */
        //webView.getSettings().setLoadWithOverviewMode(true);

        webView.setWebChromeClient(new WebChromeClient());
        //webView.setWebViewClient(new WebViewClient());        //impossible to play video

        /* {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                jsPossible = true;
                //webView.loadUrl("javascript:ProcessJson()");
            }
        });*/

        // these settings speed up page load into the webview
        //webView.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);
        //webView.requestFocus(View.FOCUS_DOWN);

        //webView.loadUrl("file:///android_asset/index.html");

        String removableStoragePath = new String();
        File fileList[] = new File("/storage/").listFiles();
        for (File file : fileList){
            if(!file.getAbsolutePath().equalsIgnoreCase(Environment.getExternalStorageDirectory().getAbsolutePath()) && file.isDirectory() && file.canRead()) {
                File file2 = new File(file.getAbsolutePath()+"/Downloads/Blutu/");
                if(file2.canRead())
                    removableStoragePath = file.getAbsolutePath();
            }
        }
        if (removableStoragePath!=null) {
            //webView.loadUrl("file://" + Environment.getExternalStorageDirectory() + "/Downloads/Blutu/assets/index.html");
            webView.loadUrl("file://" + removableStoragePath + "/Downloads/Blutu/assets/index.html");
        }
        /*
            SDcard is absent. Impossible to load user files(video)
         */
        else{
            Toast toast = Toast.makeText(getApplicationContext(),
                    "SDcard is absent. Impossible to load user files(video)."
                            + " Please insert SDcard and copy files to /Downloads/Blutu/assets/ ",
                    Toast.LENGTH_SHORT);
            toast.show();
        }
    }

    /*
        Main function. Collects data from stickers and sends it to the WebView
     */
    public void WorkWithStickers(){
        initWebView();
        blutu = new Blutu();
        gsonObj = new Gson();

        myNeareablesList = new ArrayList<MyNeareable>(maxStickerCount);

        /*
            Initializing BeaconManager for Sticker listener
         */
        beaconManager = new BeaconManager(applicationContext);

        beaconManager.setForegroundScanPeriod(300,0);
        beaconManager.setBackgroundScanPeriod(300,0);

        /*
            Setting Sticker listener & Logging discovered Stickers
        */
        beaconManager.setNearableListener(new BeaconManager.NearableListener(){
            @Override
            public void onNearablesDiscovered(List<Nearable> nearables){
                myNeareablesList.clear();
                //Do I need to check myNeareablesList.size() ?
                for(int i = 0; i<nearables.size(); i++){
                    myNeareable = new MyNeareable();
                    myNeareable.Settings(nearables.get(i).identifier,nearables.get(i).orientation.toString(),
                            nearables.get(i).isMoving,nearables.get(i).currentMotionStateDuration,
                            nearables.get(i).lastMotionStateDuration);
                    myNeareablesList.add(i,myNeareable);
                }
                if (myNeareablesList.size()>0) {
                    blutu.BlutuShine(webView,myNeareablesList,gsonObj);
                }
            }
        });
    }

    /*
        callback function called after allowing/denying Reading SDcard permission
     */
    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions,
                                           int[] grantResults) {
        if (requestCode == MY_PERMISSIONS_REQUEST_READ_EXTERNAL) {
            if (grantResults.length == 1 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                canWorkWithStickers = 1;
            } else {
                canWorkWithStickers = 0;
                Toast toast = Toast.makeText(getApplicationContext(),
                        "You must grant PERMISSION to continue working. "
                                + "Please allow Reading files from external storage",
                        Toast.LENGTH_SHORT);
                toast.show();
            }
        }
    }

    /*
        Asks permission for Reading SDcard
    */
    private void AllowExternalStorage(){
        int permissionCheck = ContextCompat.checkSelfPermission(applicationContext,
                Manifest.permission.READ_EXTERNAL_STORAGE);
        if (permissionCheck != PackageManager.PERMISSION_GRANTED){
            ActivityCompat.requestPermissions(MainActivity.this,
                    new String[]{Manifest.permission.READ_EXTERNAL_STORAGE},
                    MY_PERMISSIONS_REQUEST_READ_EXTERNAL);
        }
        /*
            App already have permission
         */
        else
            canWorkWithStickers = 1;
    }

    /*
        Check permissions (Bluetooth, Location)
     */
    @Override
    protected void onResume() {
        super.onResume();

        SystemRequirementsChecker.checkWithDefaultDialogs(this);
    }
    @Override
    protected void onStart() {
        super.onStart();

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
    protected void onDestroy() {
        super.onDestroy();
        beaconManager.disconnect();
    }
}
