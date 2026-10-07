package menu;

import java.util.Scanner;

public class Menu {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("===== TRABAJO COTIDIANO 2 =====");
        System.out.println("Metodo Constructor");
        System.out.println(" 1. Ejercicio 3 - Rectangulo");
        System.out.println(" 2. Ejercicio 4 - Libro");
        System.out.println("Metodos GET - SET");
        System.out.println(" 3. Ejercicio 1 - Persona");
        System.out.println(" 4. Ejercicio 2 - Cuenta Bancaria");
        System.out.println(" 5. Ejercicio 3 - Auto");
        System.out.println(" 6. Ejercicio 4 - Libro");
        System.out.println(" 7. Ejercicio 5 - Estudiante");
        System.out.print("Elija una opcion: ");
        int opcion = sc.nextInt();

        switch (opcion) {
            case 1:
                constructor.ejercicio3.Main.main(args);
                break;
            case 2:
                constructor.ejercicio4.Main.main(args);
                break;
            case 3:
                getset.ejercicio1.Main.main(args);
                break;
            case 4:
                getset.ejercicio2.Main.main(args);
                break;
            case 5:
                getset.ejercicio3.Main.main(args);
                break;
            case 6:
                getset.ejercicio4.Main.main(args);
                break;
            case 7:
                getset.ejercicio5.Main.main(args);
                break;
            default:
                System.out.println("Opcion no valida");
        }
    }
}
