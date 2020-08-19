package com.example.activitystatus;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.PersistableBundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    protected void onStart() {

        super.onStart();
        Log.i("ACTIVITY STATUS", "onStart: ");
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);
        Log.i("ACTIVITY STATUS", "onCreate: ");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.i("ACTIVITY STATUS", "onResume: ");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.i("ACTIVITY STATUS", "onPause: ");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.i("ACTIVITY STATUS", "onStop: ");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.i("ACTIVITY STATUS", "onRestart: ");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.i("ACTIVITY STATUS", "onDestroy: ");
    }
}
