//function sumarNumerosSinDefinirNada(){
//
//}
// al ser con tipado estricto , te exije que pongas que tipo de parametros deben ser 
// EVITAR any 
// function sumarNumerosSinTipo(a any ,b any):any{

// }

// poner explicitamente que tipo vamos a devolver
function sumarNumeros(a:number, b: number): number {
    return a+b;

}


const resultado: number = sumarNumeros(1,3);

console.log(resultado);
console.log({resultado});


// FUNCION FLECHA
// 2 formas de devolver como texto dos numeros

const sumarNumerosFlecha = (a:number,b:number):string =>{
    // return (a+b).toString();
    return `La suma de ambos numeros es ${a} y ${b} es ${a+b}.  Te ha gustado?`;
}

const resultado2 = sumarNumerosFlecha(4,7);

console.log({resultado2});


function multiplicar (primerNumero:number,segundoNumero?: number,base:number = 2){
    return primerNumero * base;
}

const resultadoMultiplicar : number = multiplicar(5);

console.log({resultadoMultiplicar});

export {};