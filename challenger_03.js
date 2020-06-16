// const usuarios = [
//     {nome: 'Carlos', tecnologias : ['HTML', 'CSS']},
//     {nome: 'Jasmine', tecnologias: ['Javascript', 'CSS']},
//     {nome: 'Tuane',tecnologias: ['HTML', 'Node.js']}
// ];



// function checaSeUsuarioUsaCss(usuario){
//     for (let i = 0; i < usuario.tecnologias.length; i++){
//         ck = 0;
//         if (usuario.tecnologias[i] == 'CSS'){
//            ck += 1; 
//         }else {
//            ck = -1;
//         }

//     }
//     if (ck > 0){
//         return true
//     }else{
//         return false
//     }
// }


// for (let i = 0; i < usuarios.length; i++){
//     const usuarioTrabComCss = checaSeUsuarioUsaCss(usuarios[i]);
//    // console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);
//     if (usuarioTrabComCss){
//      //   console.log(`O usuario ${usuarios[i].nome} trabalha com CSS`);
//     }
// }

//desafio 2
const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

  function calculaSaldo(receita, despesa){
    totalReceita = 0;
    totalDespesa = 0;
      for(let y = 0; y < receita.length; y++){
          totalReceita =  totalReceita + receita[y];
      }
      for(let x = 0; x < despesa.length; x++){
          totalDespesa = totalDespesa + despesa[x];
      }
      return (totalReceita - totalDespesa)
  };
//console.log(calculaSaldo(usuarios[1].receitas,usuarios[1].despesas))
  for (let i = 0; i < usuarios.length; i++){
      let saldo =  calculaSaldo(usuarios[i].receitas, usuarios[i].despesas);
      if (saldo > 0) {
        console.log(`User ${usuarios[i].nome} saldo positivo ${saldo}`);
      }else{
        console.log(`User ${usuarios[i].nome} saldo negativo ${saldo}`);
      }
      
  };