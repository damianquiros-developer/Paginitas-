package ejercicio2;

public class Main {

    public static void main(String[] args) {
        CuentaBancaria c1 = new CuentaBancaria();
        c1.setTitular("Carlos");
        c1.setSaldo(50000);
        System.out.println("Titular: " + c1.getTitular());
        System.out.println("Saldo: " + c1.getSaldo());

        c1.setSaldo(-1000);
        System.out.println("Saldo: " + c1.getSaldo());
    }
}
