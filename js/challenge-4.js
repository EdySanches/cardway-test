/**
 * Desafio 4 - Javascript: Redução Personalizada
 * Dado um array de objetos, escreva uma função para calcular a soma total de 
 *  um campo específico.
*/

/**
 * Realiza a soma dos valores de uma determinada propriedade.
 * @param {*} arr Array contendo os itens a serem acumulados.
 * @param {*} propName Nome da propriedade a ter os valores somados.
 * @returns {number|null} Retorna null em caso de erro, ou a soma total dos 
 *  valores da propriedade, em caso de sucesso.
 */
function sumPropValues(arr, propName) {
    // Valida o parametro propName
    if (typeof propName !== 'string' || propName.length < 1) {
        console.error("A variavel 'propName' deve ser do tipo string e ter nome válido.")
        return null;
    }

    // Percorre o array
    const sum = arr.reduce((acc, item) => {
        // Verifica existencia da propriedade
        if (item.hasOwnProperty(propName)) {
                return acc + item[propName];
            }
        } 
        , 0);

    return sum;
}

/**
 * Realiza a soma dos preços do itens do array.
 * @param {*} arr Array contendo os preços a serem acumulados.
 * @returns {number|null} Retorna null em caso de erro, ou a soma total dos preços.
 */
function sumPrices(arr) {
    return arr.reduce((acc, item) => acc + item.price, 0);
}

// Exemplo de uso
const items = [{ price: 10 }, { price: 20 }, { price: 15 }];
console.log('Método genérico:', sumPropValues(items, 'price')); 
console.log('Método específico:', sumPrices(items)); 
