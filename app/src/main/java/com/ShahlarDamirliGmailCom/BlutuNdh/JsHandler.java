package com.ShahlarDamirliGmailCom.BlutuNdh;

import android.app.Activity;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

/**
 * Created by khala on 16.08.2017.
 */

public class JsHandler {
    Activity activity;
    String TAG = "JsHandler";
    WebView webView;


    public JsHandler(Activity _contxt,WebView _webView) {
        activity = _contxt;
        webView = _webView;
    }

    @JavascriptInterface
    public void jsFnCall(){

    }

    @JavascriptInterface
     //This function handles call from Android-Java
    public String javaFnCall() {
        return "[{\"Id\":\"881908feb12d0b14\",\"currentMotionStateDuration\":5,\"isMoving\":false,\"lastMotionStateDuration\":1,\"orientation\":\"VERTICAL\"}]";
        /*final String webUrl = "javascript:ProcessJson()";
        // Add this to avoid android.view.windowmanager$badtokenexception unable to add window
        if(!activity.isFinishing())
            // loadurl on UI main thread
            activity.runOnUiThread(new Runnable() {

                @Override
                public void run() {
                    webView.loadUrl(webUrl);
                }
            });*/
    }
}
