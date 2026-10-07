package getset.ejercicio5;

import java.util.Locale;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.US);

        System.out.println("=== Ejercicio 5: Estudiante ===");
        System.out.print("Nombre: ");
        String nombre = sc.nextLine();
        System.out.print("Nota 1: ");
        double nota1 = sc.nextDouble();
        System.out.print("Nota 2: ");
        double nota2 = sc.nextDouble();

        Estudiante est = new Estudiante();
        est.setNombre(nombre);
        est.setNota1(nota1);
        est.setNota2(nota2);

        System.out.println("Estudiante: " + est.getNombre());
        System.out.println("Promedio: " + est.calcularPromedio());
    }
}
