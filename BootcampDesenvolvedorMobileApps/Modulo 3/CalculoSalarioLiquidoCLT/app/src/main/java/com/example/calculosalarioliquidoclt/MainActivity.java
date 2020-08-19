package com.example.calculosalarioliquidoclt;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import java.text.DecimalFormat;

public class MainActivity extends AppCompatActivity {

    EditText editSalarioBruto ;
    EditText editNumeroDescendentes;
    EditText editOutrosDescontos;
    static String descontos;
    static String salarioLiquidoString;
    static String numDescendentesString;
    static String inssString;
    static String irrfString;
    static String salarioBrutoString;
    static String outrosDescontosString;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btnCalcular =(Button) findViewById(R.id.btnCalcular);

        btnCalcular.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                editSalarioBruto = (EditText) findViewById(R.id.editTextSalarioBruto);
                editNumeroDescendentes = (EditText) findViewById(R.id.editTextNumeroDescendentes);
                editOutrosDescontos = (EditText) findViewById(R.id.editTextOutrosDescontos);

                salarioBrutoString = editSalarioBruto.getText().toString().replace(",",".");
                String numeroDescendentesString = editNumeroDescendentes.getText().toString().replace(",",".");
                outrosDescontosString = editOutrosDescontos.getText().toString().replace(",",".");

                double salarioBruto = salarioBrutoString.equals("")?0:Double.parseDouble(salarioBrutoString);
                int numDescendentes = Integer.parseInt(numeroDescendentesString.equals("")?"0":numeroDescendentesString);
                double outrosDescontos = Double.parseDouble(outrosDescontosString.equals("")?"0":outrosDescontosString);

                double inss = calculoInss(salarioBruto);
                double irrf = calculoIrrf(salarioBruto,numDescendentes,outrosDescontos,inss);
                irrf = irrf <= 0 ? 0 : irrf;
                double salarioLiquido = salarioLiquido(salarioBruto,inss,irrf);

                descontos = calculoDescontoPorCent(inss,irrf,salarioBruto,outrosDescontos)+"%";
                salarioBrutoString = formatValueToString(salarioBruto);
                salarioLiquidoString = formatValueToString(salarioLiquido);
                numDescendentesString = formatValueToString(numDescendentes);
                inssString = formatValueToString(inss);
                irrfString = formatValueToString(irrf);
                outrosDescontosString = formatValueToString(outrosDescontos);

                calculoToNextPage(view);

            }
        });


    }

    public void calculoToNextPage(View view){
        Intent intent = new Intent(this, Resultado.class);

        startActivity(intent);
    }

    private String formatValueToString(double value){
        return new DecimalFormat("#.##").format(value);
    }

    private String calculoDescontoPorCent(double inss, double irrf, double salarioBruto, double outrosDescontos){
        double desconto = ((inss+irrf+outrosDescontos)/salarioBruto)*100;

        return formatValueToString(desconto);
    }

    private double salarioLiquido(double salarioBruto, double inss, double irrf ){
        return salarioBruto - inss - irrf;
    }

    private double calculoIrrf(double salarioBruto,int numeroDescendente,double outrosDescontos,double inss){
        double salarioDiminuidoInss = salarioBruto - inss;
        double aliquota;
        double deducao;
        double descontoIrrf;
        double base = salarioDiminuidoInss - (numeroDescendente*189.59);
        if(salarioDiminuidoInss < 1903.98){
            deducao = 0;
            descontoIrrf=0;
        }else if(salarioDiminuidoInss >= 1903.98 && salarioDiminuidoInss < 2826.65){
            aliquota = salarioDiminuidoInss * 0.075;
            deducao = aliquota - 142.80;
            descontoIrrf = (base*0.075)-142.80;
        }else if(salarioDiminuidoInss >= 2826.65 && salarioDiminuidoInss < 3751.05){
            aliquota = salarioDiminuidoInss * 0.15;
            deducao = aliquota - 354.80;
            descontoIrrf = (base*0.15)-354.80;
        }else if(salarioDiminuidoInss >= 3751.05 && salarioDiminuidoInss < 4664.68){
            aliquota = salarioDiminuidoInss * 0.225;
            deducao = aliquota - 636.13;
            descontoIrrf = (base*0.225)-636.13;
        }else{
            aliquota = salarioDiminuidoInss * 0.275;
            deducao = aliquota - 869.36;
            descontoIrrf = (base*0.275)-869.36;
        }

//        if(numeroDescendente > 0){
//            deducao = deducao - (numeroDescendente*189.59);
//        }

        return descontoIrrf;
    }

    private double calculoInss(double salarioBruto){
        double aliquota;
        double deducao;
        if(salarioBruto < 1045.00){
            aliquota = salarioBruto * 0.075;
            deducao = salarioBruto - aliquota;
        }else if(salarioBruto >= 1045.00 && salarioBruto < 2089.60){
            aliquota = salarioBruto * 0.09;
            deducao = aliquota - 15.67;
        }else if(salarioBruto >= 2089.60 && salarioBruto < 3134.41){
            aliquota = salarioBruto * 0.12;
            deducao = aliquota - 78.36;
        }else if(salarioBruto >= 3134.41 && salarioBruto < 6101.06){
            aliquota = salarioBruto * 0.14;
            deducao = aliquota - 141.05;
        }else{
            deducao = 713.10;
        }
        return deducao;
    }
}
