package com.example.filesystems;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final EditText editNome = (EditText) findViewById(R.id.editNome);
        final EditText editSobreNome = (EditText) findViewById(R.id.editSobrenome);
        Button btnSalvar = (Button) findViewById(R.id.btnSalvar);

        btnSalvar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String nome = editNome.getText().toString()+"\n";
                String sobrenome = editSobreNome.getText().toString();

                try{
                    FileOutputStream fileOutputStream = openFileOutput("users", Context.MODE_PRIVATE);
                    fileOutputStream.write(nome.getBytes());
                    fileOutputStream.write(sobrenome.getBytes());
                    fileOutputStream.close();

                    Toast.makeText(MainActivity.this,"User salvo com sucesso",Toast.LENGTH_LONG).show();

                    startActivity(new Intent(MainActivity.this, UserActivity.class));

                }catch (FileNotFoundException e){
                    e.printStackTrace();
                }catch (IOException e){
                    e.printStackTrace();
                }

            }
        });

    }
}