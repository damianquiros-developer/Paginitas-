package cuentabancaria;

import java.util.Locale;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.US);

        System.out.print("Nombre del titular: ");
        String titular = sc.nextLine();
        System.out.print("Saldo inicial: ");
        double saldo = sc.nextDouble();

        CuentaBancaria cuenta = new CuentaBancaria();
        cuenta.setTitular(titular);
        cuenta.setSaldo(saldo);

        System.out.print("Ingrese un nuevo saldo: ");
        double nuevoSaldo = sc.nextDouble();
        cuenta.setSaldo(nuevoSaldo);

        System.out.println("Titular: " + cuenta.getTitular());
        System.out.println("Saldo: " + cuenta.getSaldo());
    }
}
