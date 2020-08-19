package com.example.quiz;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.widget.EditText;

import com.example.quiz.ui.login.LoginActivity;

import java.util.Random;

public class SplashActivity extends AppCompatActivity {

    public static int ident ;
    public static int longSplashTime ;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        hasSplash();



    }

    private void hasSplash(){
        splashScreenTimer(ident);
    }

    private void splashScreenTimer(int pageIdentifier){
        if(pageIdentifier==1){
            Intent intent = new Intent(this,MainActivity.class);
            startActivity(intent);
        }else{
            new Handler(Looper.getMainLooper()).postDelayed(new Runnable(){
                @Override
                public void run() {
                    redirectedActivity();
                }
            },longSplashTime);
        }

    }

    private void redirectedActivity(){
            Intent intent = new Intent(this, LoginActivity.class);
            startActivity(intent);
    }


}