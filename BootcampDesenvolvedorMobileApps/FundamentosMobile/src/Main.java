import java.util.ArrayList;
import org.json.src.main.java.org.json.JSONObject;
import org.json.src.main.java.org.json.JSONArray;
import java.util.Random;

class Correntista{
	private Integer id;
	private String nome;
	private String agencia;
	private String conta;
	private Double saldo;

	Integer getId(){
		return this.id;
	}
	
	String getNome(){
		return this.nome;
	}

	String getAgencia(){
		return this.agencia;
	}

	String getConta(){
		return this.conta;
	}

	Double getSaldo(){
		return this.saldo;
	}

	void setNome(String nome){
		this.nome = nome;
	}

	void setId(Integer id){
		this.id = id;
	}

	void setAgencia(String agencia){
		this.agencia = agencia;
	}

	void setSaldo(Double saldo){
		this.saldo = saldo;
	}

	void setConta(String conta){
		this.conta = conta;
	}
}

public class Main {

	public static void main(String[] args) {
		Random gerador = new Random();
		JSONArray mJsonArray = new JSONArray();
		ArrayList<Correntista> correntistas = new ArrayList<Correntista>();
		for(int i = 0; i < 3; i++){
			Correntista correntista = new Correntista();
			correntista.setAgencia("000-"+(i+1));
			correntista.setId(i+1);
			correntista.setConta(gerador.nextInt(100000)+"-"+gerador.nextInt(9));
			switch(i){
				case 2:
					correntista.setNome("Igor");
					break;
				case 1:
					correntista.setNome("João");
					break;
				case 0:
					correntista.setNome("Valentina");
					break;

			}
			correntista.setSaldo((i+1.0)*12054);
			correntistas.add(correntista);
		}

		for(Correntista c : correntistas){
			System.out.println("\n"+c.getNome()+" possui na conta R$"+c.getSaldo());
			
			JSONObject myObject = new JSONObject();
			myObject.put("id",c.getId());
			myObject.put("nome",c.getNome());
			myObject.put("conta",c.getConta());
			myObject.put("agencia", c.getAgencia());
			myObject.put("saldo", c.getSaldo());
			mJsonArray.put(myObject);
		}
		Double saldoBanco = correntistas.stream().map(correntista->correntista.getSaldo()).reduce(0.0,(acc,curr)->acc+curr);
		System.out.println("\nO banco possui um saldo total de R$"+saldoBanco);
		
		System.out.println("\n");
		System.out.println(mJsonArray.toString());
		System.out.println("\n");

	}

}
