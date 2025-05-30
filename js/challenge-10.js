/**
 * Desafio 10 - JavaScript: Fibonacci com Memoization
 * Implemente uma função para calcular o n-ésimo número de Fibonacci usando 
 *  memoization para otimizar o desempenho.
*/

/**
 * Configura uma função dada para ser memoizada, ou seja, ter seu valor guardado
 *  em cache de acordo com o parametro passado.
 * @param {*} func Função a ser memoizada.
 * @returns {function} Retorna a função memoizada.
 */
function memoize(func) {
    // Valida o parametro func
    if (typeof func !== 'function') {
        console.error("A variavel 'func' deve ser do tipo function.")
        return null;
    }

    // Cria o cache
    let cache = {};
    return (...args) => {
        // Cria a chave para a busca utilizando os argumentos da função 
        const key = args.join('-'); 
        if (key in cache) {
            console.log('Buscando do cache', key);
            return cache[key];
        }
        else {
            let result = func(...args);
            // Memoiza a função
            cache[key] = result;
            return result;
        }
    }
}

/**
 * Calcula o Fibonacci de N recursivamente.
 * @param {*} n Quantidade de números de Fibonacci a serem somados.  
 * @returns {number} Soma dos números calculados.
 */
function rawFibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    }
    return rawFibonacci(n-1) + rawFibonacci(n-2);
}

// Memoização da função de Fibonacci
const fibonacci = memoize(rawFibonacci);

// Exemplo de uso
console.log(fibonacci(10));
console.log(fibonacci(10));
