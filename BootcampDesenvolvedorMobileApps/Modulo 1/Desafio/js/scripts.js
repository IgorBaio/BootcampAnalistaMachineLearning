window.addEventListener("load", async ()=>{
   const value = document.querySelector("#valor");
   const arrayAccounts = await getAccounts();
   
   const totalOfDeposits = getTotalDepositos(arrayAccounts);

   const accountsFilterOnBalance = getAccountsFilterOnBalance(value.value, arrayAccounts)
   const accountsFilterOnBalanceAndAgency = getAccountsFilterOnBalanceAndAgency(value.value, arrayAccounts,33)
   const accountsWithHigherBalance = getAccountWithHigherBalance(arrayAccounts);
   const accountsWithLowerBalance = getAccountsWithLowerBalance(arrayAccounts);
   const accountsWithLowerBalance_3 = get3AccountsWithLowerBalance(arrayAccounts);
   const countAgency47 = getCountAgency47(arrayAccounts);
   const countAgency47MariaName = getCountAgency47MariaName(arrayAccounts);

   const agencyWithHigherBalance = getAgencyWithHigherBalance(arrayAccounts);
   const agencyWithLowerBalance = getAgencyWithLowerBalance(arrayAccounts);

   const totalOfPersonWithHigherBalanceEachAgency = getTotalOfPersonWithHigherBalanceEachAgency(arrayAccounts);
   const questao1 = document.querySelector("#questao1");
   const questao2 = document.querySelector("#questao2");
   const questao3 = document.querySelector("#questao3");
   const questao4 = document.querySelector("#questao4");
   const questao5 = document.querySelector("#questao5");
   const questao6 = document.querySelector("#questao6");
   const questao7 = document.querySelector("#questao7");
   const questao8 = document.querySelector("#questao8");
   const questao9 = document.querySelector("#questao9");
   const questao10 = document.querySelector("#questao10");
   const questao11 = document.querySelector("#questao11");
   const questao12 = document.querySelector("#questao12");
   
   var menorSaldoAgencia47 = accountsHigherValueAgency(arrayAccounts,47);
   
   questao1.textContent = "Questão 1:\nA Soma total dos depósitos de todas as agências é: "+totalOfDeposits;
   questao2.textContent = "Questão 2:\nO número total de contas com mais de 100 reais de saldo é: \n\n"+accountsFilterOnBalance;
   questao3.textContent = "Questão 3:\nO número de contas com mais de 100 reais de saldo na agência 33 é: "+accountsFilterOnBalanceAndAgency;
   questao4.textContent = "Questão 4:\nA agência com maior saldo é a: "+agencyWithHigherBalance.name+" com o valor de R$"+agencyWithHigherBalance.valor;
   questao5.textContent = "Questão 5:\nA agência com o menor saldo é a: "+agencyWithLowerBalance.name+" com o valor de R$"+agencyWithLowerBalance.valor;
   questao6.textContent = "Questão 6:\nConsidere o cliente com o maior saldo em cada agência (caso haja mais de um cliente com o maior saldo, escolha apenas um). O valor total desses saldos é: "+totalOfPersonWithHigherBalanceEachAgency;
   questao7.textContent = "Questão 7:\nO nome do(a) cliente com o maior saldo na agência 10 é: "+accountsHigherValueAgency(arrayAccounts,10)[0].name;
   questao8.textContent = "Questão 8:\nO nome do(a) cliente com o menor saldo na agência 47 é: "+menorSaldoAgencia47[menorSaldoAgencia47.length-1].name;
   questao9.textContent = "Questão 9:\nVocê deve mostrar os nomes dos três clientes com menor saldo da agência 47, separados por vírgula e em ordem crescente (do menor para o maior). Qual seria a sua saída do programa? \n\n"+accountsWithLowerBalance_3;
   questao10.textContent = "Questão 10:\nQuantos clientes estão na agência 47? \n\n"+countAgency47;
   questao11.textContent = "Questão 11:\nQuantos clientes que tem Maria no nome estão na agencia 47? "+countAgency47MariaName;
   questao12.textContent = "Questão 12:\nConsiderando que o id deve ser único e é sequencial, qual o próximo id possível para conta? "+(arrayAccounts[arrayAccounts.length-1].id+1);


   console.log("A Soma total dos depósitos de todas as agências é: "+totalOfDeposits);
   console.log("O número total de contas com mais de 100 reais de saldo é: "+accountsFilterOnBalance);
   console.log("O número de contas com mais de 100 reais de saldo na agência 33 é: "+accountsFilterOnBalanceAndAgency);
   console.log("A agência com maior saldo é a: "+agencyWithHigherBalance.name+" com o valor de R$"+agencyWithHigherBalance.valor);
   console.log("A agência com o menor saldo é a: "+agencyWithLowerBalance.name+" com o valor de R$"+agencyWithLowerBalance.valor);
   console.log("Considere o cliente com o maior saldo em cada agência (caso haja mais de um cliente com o maior saldo, escolha apenas um). O valor total desses saldos é: "+totalOfPersonWithHigherBalanceEachAgency);
   // console.log("O nome do(a) cliente com o maior saldo na agência 10 é: "+accountsWithHigherBalance.name+" com o valor de R$"+accountsWithHigherBalance.balance);
   console.log("O nome do(a) cliente com o maior saldo na agência 10 é: "+accountsHigherValueAgency(arrayAccounts,10)[0].name)
   console.log("O nome do(a) cliente com o menor saldo na agência 47 é: "+menorSaldoAgencia47[menorSaldoAgencia47.length-1].name)
   console.log("Você deve mostrar os nomes dos três clientes com menor saldo da agência 47, separados por vírgula e em ordem crescente (do menor para o maior). Qual seria a sua saída do programa? \n\n"+accountsWithLowerBalance_3);
   console.log("Quantos clientes estão na agência 47? \n\n"+countAgency47);
   console.log("Quantos clientes que tem Maria no nome estão na agencia 47? \n\n"+countAgency47MariaName);
   
});

async function getAccounts(){
   // const accounts = await fetch("http://localhost:3090/api/accounts");
   const accounts = await fetch("https://igti-film.herokuapp.com/api/accounts");
   console.log(accounts);
   const dataJson = await accounts.json()
   console.log("dataJson");
   console.log(dataJson);
   const arrayBalance = dataJson.map(account=>{
      const {id,agencia,conta,name,balance} = account;

      return {
         id,
         agencia,
         conta,
         name,
         balance
      }
   });
   return arrayBalance;
}

function getTotalDepositos(data){
   const total = data.reduce((acc, curr) =>acc+curr.balance,0 );
   return total;
}

function getAccountsFilterOnBalance(valor, arrayAccounts){
   const accountsMoreThanValue = arrayAccounts.filter(account=>account.balance > 100);
   return accountsMoreThanValue.length;
}

function getAccountsFilterOnBalanceAndAgency(valor, arrayAccounts,agencia){
   const accountsMoreThanValue = arrayAccounts
               .filter(account=>account.balance > 100 && account.agencia===agencia);
   return accountsMoreThanValue.length;
}

function getAccountWithHigherBalance(arrayAccounts){
   const accountWithHigherBalance = arrayAccounts
         .map(account=>{
            const {agencia, balance,name} = account;
            return {
               agencia,
               balance,
               name
            }
         })
         .sort((a,b)=>{
            return b.balance - a.balance;
         });

      console.log("accountWithHigherBalance: ")
      console.log(accountWithHigherBalance)
      return accountWithHigherBalance[0]
}

function getAccountsWithLowerBalance(arrayAccounts){
   const accountsWithLowerBalance = arrayAccounts
         .map(account=>{
            const {agencia, balance,name} = account;
            return {
               agencia,
               balance,
               name
            }
         })
         .sort((a,b)=>{
            return a.balance - b.balance;
         })
         
         ;

      console.log("agencyWithLowerBalance: ")
      console.log(accountsWithLowerBalance)
}

function get3AccountsWithLowerBalance(arrayAccounts){
   const accountsWithLowerBalance_3 = arrayAccounts
         .map(account=>{
            const {agencia, balance,name} = account;
            return {
               agencia,
               balance,
               name
            }
         })
         .filter(account => account.agencia === 47)
         .sort((a,b)=>{
            return a.balance - b.balance;
         });
         
         let threeFirstsPeople = []
         let msg = "";
         for(let i = 0;i<3;i++){
            threeFirstsPeople = [...threeFirstsPeople,accountsWithLowerBalance_3[i]]
            if(i===2){
               msg += threeFirstsPeople[i].name+"."
            }else{
               msg += threeFirstsPeople[i].name+", "
            }
         }
         
      return msg;
}

function getCountAgency47(arrayAccounts){
   const countAgency47 = arrayAccounts
         .filter(account => account.agencia === 47)

   return countAgency47.length;
}

function getCountAgency47MariaName(arrayAccounts){
   const countAgency47MariaName = arrayAccounts
         .map(account=>{
            const {agencia, balance,name} = account;
            return {
               agencia,
               balance,
               name
            }
         })
         .filter(account => account.agencia === 47 && account.name.includes("Maria"))

   console.log("getCountAgency47MariaName:")
   console.log(countAgency47MariaName)
   return countAgency47MariaName.length
}


function getAgencyWithHigherBalance(arrayAccounts){
   let agencyWithHigherBalance = arrayAccounts
         .map(account=>{
            const {agencia, balance,name} = account;
            return {
               agencia,
               balance
            }
         })
         .sort((a,b)=>{
            return b.balance - a.balance;
         });
   let somaAgencia10 = 0   
   let somaAgencia47 = 0   
   let somaAgencia25 = 0   
   let somaAgencia33 = 0   

   for(let i = 0;i<agencyWithHigherBalance.length;i++){
      switch(agencyWithHigherBalance[i].agencia){
         case 10:
            somaAgencia10 += agencyWithHigherBalance[i].balance;
            break;
         case 25:
            somaAgencia25 += agencyWithHigherBalance[i].balance;
            break;
         case 33:
            somaAgencia33 += agencyWithHigherBalance[i].balance;
            break;
         case 47:
            somaAgencia47 += agencyWithHigherBalance[i].balance;
            break;
      }
   }

   agencyWithHigherBalance = [
      {
      name: "agencia 10",
      valor: somaAgencia10
      },
      {
         name:"agencia 25",
         valor: somaAgencia25
      },{
         name:"agencia 33",
         valor:somaAgencia33
      },
      {
         name:"agencia 47",
         valor:somaAgencia47
      }]
   .sort((a,b)=>{
      return b.valor-a.valor
   })
      console.log("agencysWithHigherBalance: ")
      console.log(agencyWithHigherBalance)
   return agencyWithHigherBalance[0];
}

function getAgencyWithLowerBalance(arrayAccounts){
   let agencyWithLowerBalance = arrayAccounts
         .map(account=>{
            const {agencia, balance,name} = account;
            return {
               agencia,
               balance
            }
         })
         .sort((a,b)=>{
            return b.balance - a.balance;
         });
   let somaAgencia10 = 0   
   let somaAgencia47 = 0   
   let somaAgencia25 = 0   
   let somaAgencia33 = 0   

   for(let i = 0;i<agencyWithLowerBalance.length;i++){
      switch(agencyWithLowerBalance[i].agencia){
         case 10:
            somaAgencia10 += agencyWithLowerBalance[i].balance;
            break;
         case 25:
            somaAgencia25 += agencyWithLowerBalance[i].balance;
            break;
         case 33:
            somaAgencia33 += agencyWithLowerBalance[i].balance;
            break;
         case 47:
            somaAgencia47 += agencyWithLowerBalance[i].balance;
            break;
      }
   }

   agencyWithLowerBalance = [
      {
      name: "agencia 10",
      valor: somaAgencia10
      },
      {
         name:"agencia 25",
         valor: somaAgencia25
      },{
         name:"agencia 33",
         valor:somaAgencia33
      },
      {
         name:"agencia 47",
         valor:somaAgencia47
      }]
   .sort((a,b)=>{
      return a.valor-b.valor
   })
   console.log("agencysWithLowerBalance: ")
   console.log(agencyWithLowerBalance)
   return agencyWithLowerBalance[0];
}

function getTotalOfPersonWithHigherBalanceEachAgency(arrayAccounts){
   const accountsHigherValueAgency10 = accountsHigherValueAgency(arrayAccounts,10);
   const accountsHigherValueAgency25 = accountsHigherValueAgency(arrayAccounts,25);
   const accountsHigherValueAgency33 = accountsHigherValueAgency(arrayAccounts,33);
   const accountsHigherValueAgency47 = accountsHigherValueAgency(arrayAccounts,47);
   console.log(accountsHigherValueAgency10)
   console.log(accountsHigherValueAgency25)
   console.log(accountsHigherValueAgency33)
   console.log(accountsHigherValueAgency47)

   let totalOfPersonWithHigherBalanceEachAgency = 
   accountsHigherValueAgency10[0].balance+
   accountsHigherValueAgency25[0].balance+
   accountsHigherValueAgency33[0].balance+
   accountsHigherValueAgency47[0].balance
   return totalOfPersonWithHigherBalanceEachAgency;
}

function accountsHigherValueAgency(arrayAccounts,agencia){
   const accountsHigherValueAgency = arrayAccounts
               .map(account=>{
                  const {agencia,balance,name} = account
                  return {
                     agencia,
                     balance,
                     name
                  }
               })
               .filter(account=> account.agencia===agencia).
               sort((a,b)=>{
                  return b.balance-a.balance
               });
   return accountsHigherValueAgency;
}