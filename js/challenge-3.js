/**
 * Desafio 3 - Algoritmos: Implementar um Debounce
 * Implemente uma função debounce em JavaScript. Ela deve adiar a execução de 
 *  uma função até que um certo tempo tenha passado desde a última vez que foi chamada.
*/

/**
 * Adia a execução de uma função até que o tempo determinado tenha passado.
 * @param {*} delay Tempo em milissegundos para adiamento da execução da função.
 * @param {*} func Função a ser executada.
 * @returns {function} Função designada contendo o debounce. 
 */
function fractionalKnapsack(func, delay) {
    // Gera notificação caso o param delay não seja do tipo number
    if (typeof delay !== 'number') {
        console.error("A variavel 'delay' deve ser do tipo number.")
    }
    // Gera notificação caso o param func não seja do tipo function
    if (typeof func !== 'function') {
        console.error("A variavel 'func' deve ser do tipo function.")
    }

    // ID do timer para limpeza de timers e atribuição
    let timer;
    // Permite uso de argumentos
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Exemplo de uso
const debouncedFunction = fractionalKnapsack(() => console.log("Chamado!"), 300);
debouncedFunction(); // Chamado após 300ms
