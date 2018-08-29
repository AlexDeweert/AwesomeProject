package com.awesomeproject;

//import android.bluetooth.BluetoothAdapter;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class BluetoothAdapterModule extends ReactContextBaseJavaModule {


  public BluetoothAdapterModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "BluetoothAdapter";
  }

  @ReactMethod
  public void sayHello( Callback errorCallback, Callback successCallback ) {
    try {
      successCallback.invoke("Hello from the Java BluetoothAdapterModule!");
    }
    catch ( Exception e ){
      errorCallback.invoke("Error in Java BluetoothAdapterModule");
      //Toast.makeText(mContext, "Unable to sayHello", Toast.LENGTH_LONG).show();
    }
  }
}
