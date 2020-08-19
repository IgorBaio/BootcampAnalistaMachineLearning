package com.example.calculosalarioliquidoclt;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import org.w3c.dom.Text;

public class Resultado extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_resultado);

        Intent intent = getIntent();

        TextView salarioBrutoView = findViewById(R.id.textViewResultadoSalarioBrutoValor);
        TextView inssView = findViewById(R.id.textViewINSSValor);
        TextView irrfView = findViewById(R.id.textViewIRRFValor);
        TextView outrosDescontosView = findViewById(R.id.textViewResultadoOutrosDescontosValor);
        TextView salarioLiquidoView = findViewById(R.id.textViewSalarioLiquidoValor);
        TextView descontos = findViewById(R.id.textViewDescontosValor);
        Button btnVoltar = (Button)findViewById(R.id.btnVoltar);

        salarioBrutoView.setText(MainActivity.salarioBrutoString);
        inssView.setText(MainActivity.inssString);
        irrfView.setText(MainActivity.irrfString);
        outrosDescontosView.setText(MainActivity.outrosDescontosString);
        salarioLiquidoView.setText(MainActivity.salarioLiquidoString);
        descontos.setText(MainActivity.descontos);

        btnVoltar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                voltarMain(view);
            }
        });

    }

    public void voltarMain(View view){
        Intent backIntent = new Intent(this, MainActivity.class);
        startActivity(backIntent);
    }
}
