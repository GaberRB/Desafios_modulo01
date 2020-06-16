//desafio 01 calculo imc

const name = 'Carlos';
const weight = 120;
const height = 1.88;

const imc = weight / (height * height);

if (imc >= 30) {
    console.log('Carlos you are overweight');
} else {
    console.log('Carlos you are not overweight')
}

//desafio 2
//cálculo de aposentadoria

const name1 = 'Silvana';
const sex = 'F';
const age = 48;
const contribution = 40;

if (sex == 'F') {
    if (!(contribution >= 30) && ((age + contribution < 85))) {
        console.log(`${name1} cannot retire `)
    } else {
        console.log(` ${name1} retire `)
    }

} else {
    if (!(contribution >= 35) && ((age + contribution < 95))) {
        console.log(`${name1} cannot retire `)
    } else {
        console.log(` ${name1}retire `)
    }
}