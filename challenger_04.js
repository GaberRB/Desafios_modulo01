const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

  

  function createTransaction(operation){
    user.transactions.push(operation);  
    if (operation.type == 'credit'){
        user.balance = user.balance + operation.value;
    }else{
        user.balance = user.balance - operation.value;
    }
  };

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });


//console.table(user);
  function getHigherTransactionByType(type){
     let max = 0;
     let maxOperation = {};
     
     for (let values of user.transactions){
        if ((type == 'credit') && (values.type == 'credit')){
           if (values.value > max){
               max = values.value;
               maxOperation = values;
           } 
        }else if ((type == 'debit') && (values.type == 'debit')){
            if(values.value > max){
                max = values.value;
                maxOperation = values;
            }
        }
        
         
    }
    return (maxOperation)  
  };

  function getAverageTransactionValue(){
      total = 0;
      for (values of user.transactions){
        total = total + values.value;
      }
      return average = total / user.transactions.length;
  }

  function getTransactionsCount (){
      countCred = 0;
      countDeb = 0;
      for (value of user.transactions){
          if (value.type == 'credit'){
              countCred ++;
          }else{
              countDeb ++;
          }
      }
      return `Credit : ${countCred} , Debit : ${countDeb} `
  }

  console.log(getHigherTransactionByType('debit'));
  console.log(getAverageTransactionValue());
  console.log(getTransactionsCount());