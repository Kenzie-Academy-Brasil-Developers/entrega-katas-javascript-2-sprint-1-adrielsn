// comece a criar a sua função add na linha abaixo

function add(a,b) {
    let totalAdd = a + b
    return totalAdd;
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo

function multiply(a,b) {
    let totalMult = 0
    for (let i = 0; i<b; i++) 
        totalMult += add(a, 0);
    return totalMult
    
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(x,n) {
    let totalPower = 1;
    for(let i = 1;i<=n; i++)
        totalPower *= multiply(x,x)/x;
    return totalPower
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(a) {
    let totalFact = 1;
    for(let i = 1; i<=a; i++)
        totalFact *= multiply(i,1);
    return totalFact;
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
