package auto;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Marca: ");
        String marca = sc.nextLine();
        System.out.print("Modelo: ");
        String modelo = sc.nextLine();
        System.out.print("Velocidad: ");
        int velocidad = sc.nextInt();

        Auto auto = new Auto();
        auto.setMarca(marca);
        auto.setModelo(modelo);
        auto.setVelocidad(velocidad);

        System.out.println("Marca: " + auto.getMarca());
        System.out.println("Modelo: " + auto.getModelo());
        System.out.println("Velocidad: " + auto.getVelocidad() + " km/h");
    }
}
