package constructor.ejercicio4;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("=== Ejercicio 4: Libro ===");

        System.out.println("Libro 1 (con todos los datos)");
        System.out.print("Titulo: ");
        String titulo1 = sc.nextLine();
        System.out.print("Autor: ");
        String autor1 = sc.nextLine();
        System.out.print("Anio de publicacion: ");
        int anio1 = sc.nextInt();
        sc.nextLine();

        System.out.println("Libro 2 (solo titulo y autor)");
        System.out.print("Titulo: ");
        String titulo2 = sc.nextLine();
        System.out.print("Autor: ");
        String autor2 = sc.nextLine();

        Libro libro1 = new Libro(titulo1, autor1, anio1);
        Libro libro2 = new Libro(titulo2, autor2);

        System.out.println("\n--- Libro 1 ---");
        libro1.mostrarInformacion();
        System.out.println("\n--- Libro 2 ---");
        libro2.mostrarInformacion();
    }
}
