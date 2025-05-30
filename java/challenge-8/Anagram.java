/**
 * Desafio 8 - Java: Anagramas
 * Escreva uma função em Java para verificar se duas strings são anagramas
 *  uma da outra.
 */

import java.util.Arrays;

public class Anagram {
    
    /**
     * Verifica se duas strings são anagramas uma da outra.
     * @param str1 Primeira string para comparação
     * @param str2 Segunda string para comparação
     * @return Retorna true se as strings são anagramas, e false no caso contrário
     */
    public static boolean isAnagram(String str1, String str2) {
        // Remove espaços e converte para minúsculas para comparação
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();
        
        // Verifica o comprimento das strings 
        if (str1.length() != str2.length()) {
            return false;
        }
        
        // Converte as strings para arrays de caracteres e ordena
        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();
        
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);
        
        // Compara os arrays ordenados
        return Arrays.equals(charArray1, charArray2);
    }

    public static void main(String[] args) {
        // Exemplos de uso
        String[][] testCases = {
            {"listen", "silent"},
            {"hello", "world"},
            {"debit card", "bad credit"},
            {"cinema", "iceman"},
            {"restful", "fluster"}
        };

        for (String[] testCase : testCases) {
            String str1 = testCase[0];
            String str2 = testCase[1];
            boolean result = isAnagram(str1, str2);
            System.out.printf("'%s' e '%s' %s \n", 
                            str1, str2, result ? "são anagramas!" : "não são anagramas!");
        }
    }
}

