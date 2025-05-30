/**
 * Desafio 2 - Algoritmos: Substring Palíndroma
 * Escreva uma função que encontre a maior substring palíndroma em uma 
 *  string dada. 
*/

/**
 * Verifica qual a maior substring palindroma em uma substring dada.
 * @param {*} str String a ser analisada.
 * @returns {null|string} Retorna null no caso de parametro nao-string,
 *  ou retorna string caso encontre o maior palindromo.
 */
function getBiggestPalindromeSubstring(str) {
    // Retorna null caso o param não seja uma string
    if (typeof str !== 'string') {
        console.error('A variavel passada como parâmetro deve ser do tipo string.')
        return null;
    }

    // Retorna string vazia caso esteja vazio 
    if (str.length < 1)
        return str;

    // Inicializa palindromo como vazio 
    let palindrome = '';

    /**
     * Procura substrings em uma string de acordo com os indices de esquerda e direita.
     * @param {*} str String a ser analisada.
     * @param {*} left Indice de caracter a esquerda da string.
     * @param {*} right Indice de caracter a direita da string.
     * @returns {number} O comprimento da substring.
     */
    function expandFromCenter(str, l, r) {
        while (l>=0 && r<str.length && str[l]===str[r]) {
            if ((r - l + 1) > palindrome.length)
                palindrome = str.slice(l, r+1);
            l--;
            r++;
        }
    }

    // Percorre toda a string  
    for (let i=0 ; i < str.length ; i++) {
        // Procura possiveis palindromos impares
        expandFromCenter(str, i, i);
        // Procura possiveis palindromos pares
        expandFromCenter(str, i, i+1);
    }

    // Retorna o recorte com a maior substring
    return palindrome;
}

// Exemplo de uso
console.log('Maior substring encontrada: ', getBiggestPalindromeSubstring('OSSOaoARARAsonodvREVIVERoivnRADAR'));
console.log('Maior substring encontrada: ', getBiggestPalindromeSubstring('babad'));
console.log('Maior substring encontrada: ', getBiggestPalindromeSubstring('ABBA'));
console.log('Maior substring encontrada: ', getBiggestPalindromeSubstring('abcdefghi'));
console.log('Maior substring encontrada: ', getBiggestPalindromeSubstring('a'));
console.log('Maior substring encontrada: ', getBiggestPalindromeSubstring(''));
