/**
 * Suma dos numeros. El segundo parámetro es opcional.
 * Si no se proporciona, se toma 0 como valor neutro.

 */
function sumar(a: number, b?: number): number {
    const operandoB = b ?? 0;
    return a + operandoB;
}

/**
 * Resta dos numeros. El segundo parámetro es opcional.
 * Si no se proporciona, se toma 0 para mantener el valor original.

 */
function restar(a: number, b?: number): number {
    const operandoB = b ?? 0;
    return a - operandoB;
}

/**
 * Multiplica dos numeros. El segundo parámetro es opcional.
 * Si no se proporciona, se toma 1 como elemento neutro de la multiplicación.

 */
function multiplicar(a: number, b?: number): number {
    const operandoB = b ?? 1;
    return a * operandoB;
}

/**
 * Divide dos numeros. El segundo parámetro es opcional.
 * Si no se proporciona, se toma 1 como elemento neutro. Incluye control para evitar la división por cero.
 cero.
 */
function dividir(a: number, b?: number): number {
    const operandoB = b ?? 1;
    if (operandoB === 0) {
        console.warn("Error: No se puede dividir entre cero.");
        return 0;
    }
    return a / operandoB;
}

// --- Pruebas ---

console.log("--- PRUEBAS DE LA CALCULADORA (Parametros opcionales con '?') ---");

// Suma
console.log("Suma (10 + 5):", sumar(10, 5));
console.log("Suma con Parametros omitido (10 + opcional):", sumar(10));

// Resta
console.log("Resta (10 - 4):", restar(10, 4));
console.log("Resta con Parametros omitido (10 - opcional):", restar(10));

// Multiplicación
console.log("Multiplicacion (5 * 3):", multiplicar(5, 3));
console.log("Multiplicacion con Parametros omitido (5 * opcional):", multiplicar(5));

// División
console.log("Division (20 / 4):", dividir(20, 4));
console.log("Division con Parametros omitido (20 / opcional):", dividir(20));
console.log("Division por cero (10 / 0):", dividir(10, 0));

export {};