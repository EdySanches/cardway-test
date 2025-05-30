/**
 * Desafio 7 - Java: Sistema de Pedidos
 * Implemente uma classe Order em Java para gerenciar pedidos.
 * Cada pedido deve ter:
 * - ID do pedido
 * - Lista de itens (nome e preço)
 * - Método para calcular o total
 * - Método para aplicar um desconto (em porcentagem)
 */

import java.util.ArrayList;
import java.util.List;

/**
 * Representa um item no pedido.
 */
class Item {
    private String name;
    private double price;

    public Item(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }
}

/**
 * Representa um pedido com uma lista de itens e métodos para gerenciá-lo.
 */
public class Order {
    private List<Item> items;
    private double total;

    public Order() {
        this.items = new ArrayList<>();
        this.total = 0.0;
    }

    /**
     * Adiciona um novo item ao pedido.
     * @param name Nome do item
     * @param price Preço do item
     */
    public void addItem(String name, double price) {
        items.add(new Item(name, price));
        setTotal(getTotal() + price);
    }

    /**
     * Calcula o total do pedido.
     * @return Valor total do pedido
     */
    public double getTotal() {
        return total;
    }

    /**
     * Define um novo valor total para o pedido.
     * @param newTotal Novo valor total
     */
    public void setTotal(double newTotal) {
        this.total = newTotal;
    }

    /**
     * Aplica um desconto percentual ao total do pedido.
     * @param percentage Porcentagem de desconto (0-100)
     * @return Valor total com desconto aplicado
     */
    public double applyDiscount(double percentage) {
        if (percentage < 0 || percentage > 100) {
            throw new IllegalArgumentException("Desconto deve estar entre 0 e 100");
        }
        double discountedTotal = getTotal() * (1 - percentage / 100);
        setTotal(discountedTotal);
        return discountedTotal;
    }

    public static void main(String[] args) {
        // Exemplo de uso
        Order order = new Order();
        
        order.addItem("Item 1", 10.00);
        order.addItem("Item 2", 15.00);
        
        order.applyDiscount(10);

        System.out.println("Total após desconto de 10%: R$" + order.getTotal());
    }
}

