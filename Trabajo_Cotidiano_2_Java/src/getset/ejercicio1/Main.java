package getset.ejercicio1;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("=== Ejercicio 1: Persona ===");
        System.out.print("Ingrese el nombre: ");
        String nombre = sc.nextLine();

        Persona p1 = new Persona();
        p1.setNombre(nombre);

        System.out.println("Nombre guardado: " + p1.getNombre());
    }
}
