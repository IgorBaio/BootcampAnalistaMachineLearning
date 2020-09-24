void main() {
  print("Hello World");
  String nome = "Igor";
  var idade = '20';
  var idade2 = 20;
  print(nome + " " + idade);
  print("$nome tem $idade2 anos");

  var lista = List();
  lista.add(1);
  lista.add(1.25);
  lista.add("texto");

  List<String> listaString = List();
  listaString.add("value");

  var lista2 = [1, 2, 3, 4];
  lista2.add(5);
  // lista2.add("Ola");

  const constanteX = 12;

  var variavelConvertida = num.parse("12");
  print(variavelConvertida);

  for (var i = 0; i < lista2.length; i++) {
    print(lista2[i]);
    if (lista2[i] == 3) break;
  }

  var map = Map();
  map['usuario'] = 'emai@email.com';
  map['senha'] = '123';
  print(map);

  var map2 = {'endereço': "Rua X"};
  map2['usuario'] = 'emai@email.com';
  map2['senha'] = '123';
  print(map2);

  map2['endereço'] = "Rua Y";
  print(map2);

  funcaoTeste(1);
  funcaoTeste(2, "opcional aqui");
  funcaoTesteNomeado(1, p3: 3, p2: 8);
  funcaoTesteNomeado(4);

  var p = Pessoa();
  p.nome = "Fran";
  p.ola();

  var aluno = Aluno();
  aluno.nome = "Igor";
  aluno.ola();

  var pessoaNome = Pessoa.fromNome("Joao");
  pessoaNome.ola();

  var calculadora = Calculadora();
  print(calculadora.operacao(2, 3));

  var calculadoraCientifica = CalculadoraCientifica();
  print(calculadoraCientifica.operacao(2, 3));

  var calculadoraFinanceira = CalculadoraFinanceira();
  print(calculadoraFinanceira.operacao(2, 3));
}

funcaoTeste(param1, [optionalParam]) {
  if (optionalParam != null)
    print("teste $param1 $optionalParam");
  else
    print("teste $param1");
}

funcaoTesteNomeado(p1, {p2, p3}) {
  print("$p1 $p2 $p3");
}

class Pessoa {
  String nome;
  String cpf;

  Pessoa();

  Pessoa.fromNome(String nome) {
    this.nome = nome;
  }

  void ola() {
    print("Meu nome é $nome");
  }
}

class Aluno extends Pessoa {
  @override
  void ola() {
    print("Sou aluno e meu nome é $nome");
  }
}

class Calculadora {
  int operacao(x, y) {
    return x + y;
  }
}

class CalculadoraCientifica implements Calculadora {
  @override
  int operacao(x, y) {
    // TODO: implement operacao
    return x + x + y;
  }
}

abstract class Calc {
  int operacao(a, b);
}

class CalculadoraFinanceira implements Calc {
  @override
  int operacao(a, b) {
    // TODO: implement operacao
    return a - b;
  }
}
