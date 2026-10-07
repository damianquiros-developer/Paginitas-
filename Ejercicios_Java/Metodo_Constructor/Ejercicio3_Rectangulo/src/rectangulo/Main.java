package rectangulo;

import java.util.Locale;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.US);

        System.out.print("Ingrese el ancho: ");
        double ancho = sc.nextDouble();
        System.out.print("Ingrese el alto: ");
        double alto = sc.nextDouble();

        Rectangulo r1 = new Rectangulo(ancho, alto);
        r1.mostrar_datos();
    }
}
