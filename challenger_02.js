//desafio objetos
const empresa = {
    nome : 'Rocketseat',
    cor : 'Roxo',
    foco : 'Programação',
    endereco : {
        rua : 'Rua Guilherme Gembala',
        numero : 260
    }
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);

//desafio objetos 2
const programador = {
    nome: 'Carlos',
    idade: '32',
    tecnologias : [
        {nome: 'C++', especialidade:'Desktop'},
        {nome: 'Javascript', especialidade:'Web/Mobile'}
    ]
}
console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologias[0].nome} com a especialidade ${programador.tecnologias[0].especialidade}`);