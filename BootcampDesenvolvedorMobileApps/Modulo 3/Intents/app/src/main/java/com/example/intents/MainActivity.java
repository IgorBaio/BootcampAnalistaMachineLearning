package com.example.intents;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    public final static String MENSAGEM_ADICIONAL = "com.example.intent.MENSAGEM";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void novaTela(View view){



        Intent messageIntent = new Intent(this, NewActivity.class);

        messageIntent.putExtra(MENSAGEM_ADICIONAL,"Igor");

        startActivity(messageIntent);
    }
}
