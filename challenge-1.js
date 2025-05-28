/**
 * Desafio 1 - Algoritmos: Ordenação Personalizada
 * Implemente uma função que ordene um array de números inteiros, mas priorize 
 *  os números pares em ordem crescente e os ímpares em ordem decrescente.
*/

/**
 * Ordena o array passado por parametro de modo a inserir primeiro os números
 *  pares em ordem crescente, e depois os ímpares em ordem decrescente.
 * @param {*} arr Array de números a serem ordenados.
 * @returns {null|number[]} Retorna null caso o param arr não seja de números, 
 *  e number[] caso o arr seja ordenável.
 */
function sortEvenOdd(arr) {
    // Retorna nulo caso o array não seja composto apenas por números
    if (!(Array.isArray(arr) && arr.every(item => typeof item === 'number'))) 
        return null

    // Retorna o array caso esteja vazio 
    if (arr.length == 0)
        return arr

    // Separa os números pares e ímpares
    const evens = arr.filter(num => num % 2 === 0);
    const odds = arr.filter(num => num % 2 !== 0);

    /*
     * Para arrays numéricos o algoritmo utilizado pelo Node é o TimSort, embora
     *  navegadores usem o QuikSort.
     * Necessário passar a função de comparação pois o JS converte os elementos 
     *  para string por padrão caso não hajam instruções.
     */
    evens.sort((a, b) => a - b);
    odds.sort((a, b) => b - a);

    // Concatena os dois arrays (pares primeiro, ímpares depois)
    return [...evens, ...odds];
}

// Exemplo de uso
const array = [3, 17, 32, 48, 6, 11, 5, 5, 9, 6, 7, 12];
const sortedArray = sortEvenOdd(array);
console.log(sortedArray);
