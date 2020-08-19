package com.example.quiz;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.example.quiz.data.Result;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Dictionary;
import java.util.Enumeration;

public class MainActivity extends AppCompatActivity {

    static double acertos;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        setTheme((R.style.AppTheme));
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final TextView viewPerguntas = (TextView) findViewById(R.id.textView);
        Button btnVerdadeiro = (Button) findViewById(R.id.btnVerdadeiro);
        Button btnFalso = (Button) findViewById(R.id.btnFalso);
        String questoesStr = "A linguagem oficial para desenvolvimento Android Nativo pela Google é a Kotlin; verdadeiro\n" +
                "O processo de publicação do aplicativo na Google Play é gratuito; false\n" +
                "O Brasil possui uma população de quase 210 milhões; verdadeiro\n" +
                "Flutter é uma dos frameworks de desenvolvimento mobile; verdadeiro\n" +
                "A linguagem de programação do Flutter é o Dart; verdadeiro\n" +
                "O Flutter possui interoperabilidade e pode ter projetos em Java e Dart; falso\n" +
                "React-Native é uma plataforma para desenvolvimento de aplicativos móveis; verdadeiro\n" +
                "O Kotlin possui interoperabilidade oque possibilita implementar projetos em Java e Kotlin; verdadeiro\n";
        final ArrayList<String> questoesAux = new ArrayList<String>();
        try {
            String questoes[];
            int i=0;
            questoes = questoesStr.split(";");
            for(String item : questoes){
                String teste[];
                teste = item.split("\n");
                questoesAux.add(teste[0]);
                if(teste.length>1)
                    questoesAux.add(teste[1]);

            }
        }catch (Exception e){
            e.printStackTrace();
        }

        final ArrayList<Integer> respostas = new ArrayList<Integer>();

        viewPerguntas.setText(questoesAux.get(0));
        final int[] i = {0};
        btnFalso.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                respostas.add(0);
                int j = i[0]+1;
                i[0]+=2;
                if(i[0]<questoesAux.size()){
                    viewPerguntas.setText(questoesAux.get(i[0]));
                    if(questoesAux.get(j).contains("fals")){
                        Toast.makeText(getApplicationContext(),"Acertou",Toast.LENGTH_LONG).show();
                    }else{
                        Toast.makeText(getApplicationContext(),"Errou",Toast.LENGTH_LONG).show();
                    }
                }
                else{
                    calculaAcertos(questoesAux,respostas);
                    Intent intent = new Intent(MainActivity.this, ResultActivity.class);
                    startActivity(intent);
                }

            }
        });

        btnVerdadeiro.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                respostas.add(1);
                int j = i[0]+1;
                i[0]+=2;
                if(i[0]<questoesAux.size()) {
                    viewPerguntas.setText(questoesAux.get(i[0]));
                    if(questoesAux.get(j).contains("erdad")){
                        Toast.makeText(getApplicationContext(),"Acertou",Toast.LENGTH_LONG).show();
                    }else{
                        Toast.makeText(getApplicationContext(),"Errou",Toast.LENGTH_LONG).show();
                    }
                }else{
                    calculaAcertos(questoesAux,respostas);
                    Intent intent = new Intent(MainActivity.this, ResultActivity.class);
                    startActivity(intent);
                }
            }
        });

    }

    private void calculaAcertos(ArrayList<String> questoes,ArrayList<Integer>respostas){

        ArrayList<Integer> respostasValues =  respostas;
        ArrayList<Integer> respostasGabarito = new ArrayList<Integer>();

        int i =0;
        for(String item:questoes){
            if (item.contains("verdade"))
                respostasGabarito.add(1);
            if(item.contains("fals"))
                respostasGabarito.add(0);
        }

        int contadorAcertos = 0;
        while(i<respostasGabarito.size()){
            if(respostasValues.get(i) == respostasGabarito.get(i)){
                contadorAcertos++;
                i++;
            }else{
                i++;
            }
        }

        double valorTotal = respostasGabarito.size();

        acertos = (contadorAcertos/valorTotal)*100;
    }
}