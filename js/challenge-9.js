/**
 * Desafio 9 -  Mochila Fracionária
 * Implemente o algoritmo de mochila fracionária (Fractional Knapsack) em 
 *  qualquer linguagem de sua escolha. Dado um limite de peso e uma lista de 
 *  itens (com peso e valor), maximize o valor total carregado.
*/

/**
 * Gerencia a mochila fracionária de acordo com os itens e o peso máximo.
 * @param {*} items Lista de itens a serem analisados e inseridos na mochila.
 * @param {*} maxWight Peso máximo suportado pela mochila.
 * @returns {number} Valor máximo contido na mochila após organização. 
 */
function fractionalKnapsack(items, maxWeight) {
    // Calcula a razão valor/peso dos items e os ordena em ordem decrescente 
    items.sort((a, b) => (b.value/b.weight) - (a.value/a.weight));

    let totalValue = 0;

    // Percorre os itens da lista ordenada
    for (let i=0; i<items.length ; i++) {
        // Calcula a quantidade de espaço na mochila
        let weightRatio = maxWeight/items[i].weight;
        // Se for possível, insere o item por completo
        if (weightRatio >= 1) {
            totalValue += items[i].value;
            maxWeight -= items[i].weight;
        } 
        // Senão, insere a fração, preenchendo a mochila
        else if (weightRatio > 0) {
            totalValue += items[i].value * weightRatio;
            break;
        }
    }

    return totalValue;
}

const items = [{value: 80, weight: 70}, {value: 60, weight: 20}, {value: 130, weight: 50}];

// Exemplo de uso
console.log('Valor total da mochila: ', fractionalKnapsack(items, 100))