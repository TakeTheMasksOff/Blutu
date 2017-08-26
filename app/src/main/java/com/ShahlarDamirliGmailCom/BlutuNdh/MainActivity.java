package com.ShahlarDamirliGmailCom.BlutuNdh;

import android.content.Context;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;

import com.estimote.coresdk.common.config.EstimoteSDK;
import com.estimote.coresdk.common.requirements.SystemRequirementsChecker;
import com.estimote.coresdk.repackaged.gson_v2_3_1.com.google.gson.Gson;
import com.estimote.coresdk.repackaged.okhttp_v2_2_0.com.squareup.okhttp.internal.ws.WebSocket;
import com.estimote.coresdk.service.BeaconManager;
import com.estimote.coresdk.recognition.packets.Nearable;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Thread.sleep;
//
// Running into any issues? Drop us an email to: contact@estimote.com
//

public class MainActivity extends AppCompatActivity {

    private BeaconManager beaconManager;
    public Gson gsonObj;
    public CloudData cloudData;
    public MyNeareable[] jsPassingInfo;
    public int maxStickerCount=10; //maximum count of stickers interacting with this "reciever"
    public ArrayList<MyNeareable> myNeareablesList;
    public MyNeareable myNeareable;
    public String json;
    public WebView webView;
    private JsHandler _jsHandler;
    public boolean jsPossible;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Context applicationContext = getApplicationContext();
        jsPossible = false;
        initWebView();

        gsonObj = new Gson();
        cloudData = new CloudData();
        myNeareable = new MyNeareable();
        myNeareablesList = new ArrayList<MyNeareable>(maxStickerCount);


        // Создаём пустой массив для хранения имен стикеров
        final ArrayList<String> stickersİD = new ArrayList<String>();

        //Initializing BeaconManager for Sticker listener
        beaconManager = new BeaconManager(applicationContext);

        //beaconManager.setForegroundScanPeriod(300,0);
        //beaconManager.setBackgroundScanPeriod(300,0);

        //Ahmad. Setting Sticker listener & Logging discovered Stickers
        beaconManager.setNearableListener(new BeaconManager.NearableListener(){
            @Override
            public void onNearablesDiscovered(List<Nearable> nearables){
                myNeareablesList.clear();
                //Do I need to check myNeareablesList.size() ?
                for(int i = 0; i<nearables.size(); i++){
                    myNeareable.set(nearables.get(i).identifier,nearables.get(i).orientation.toString(),
                            nearables.get(i).isMoving,nearables.get(i).currentMotionStateDuration,
                            nearables.get(i).lastMotionStateDuration);
                    myNeareablesList.add(i,myNeareable);
                }
                if (myNeareablesList.size()>0) {
                    json = gsonObj.toJson(myNeareablesList);

                    webView.evaluateJavascript("ProcessJson('"+json+"');",null);
                }
            }
        });
    }

    private void initWebView(){

        webView = (WebView) findViewById(R.id.WebView);
        //Tell the WebView to enable javascript execution.
        webView.getSettings().setJavaScriptEnabled(true);

        //Set whether the DOM storage API is enabled.
        webView.getSettings().setDomStorageEnabled(true);

        webView.getSettings().setAllowFileAccess(true);

        webView.getSettings().setAppCacheEnabled(true);

        //webView.getSettings().setSupportMultipleWindows(true);
        // Enable debugging WebView in Chrome
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            WebView.setWebContentsDebuggingEnabled(true);
        }

        _jsHandler = new JsHandler(this, webView);
        webView.addJavascriptInterface(_jsHandler, "JsHandler");

        webView.getSettings().setUseWideViewPort(false);
        webView.setWebChromeClient(new WebChromeClient());
        webView.setWebViewClient(new WebViewClient() {

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                jsPossible = true;
                //webView.loadUrl("javascript:ProcessJson()");
            }
        });

        // these settings speed up page load into the webview
        webView.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);
        webView.requestFocus(View.FOCUS_DOWN);
        // load the main.html file that kept in assets folder
        webView.loadUrl("file:///android_asset/DiscoveryPage.html");

    }

    @Override
    protected void onResume() {
        super.onResume();

        //Ahmad. Check if it's working. Check permissions
        boolean reqirements;
        reqirements = SystemRequirementsChecker.checkWithDefaultDialogs(this);
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
