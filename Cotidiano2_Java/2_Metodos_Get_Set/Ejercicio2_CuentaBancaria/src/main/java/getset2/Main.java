package getset2;

public class Main {

    public static void main(String[] args) {
        CuentaBancaria c1 = new CuentaBancaria("Carlos", 50000);
        System.out.println("Titular: " + c1.getTitular());
        System.out.println("Saldo inicial: " + c1.getSaldo());

        c1.depositar(20000);
        System.out.println("Saldo despues de depositar: " + c1.getSaldo());

        c1.retirar(10000);
        System.out.println("Saldo despues de retirar: " + c1.getSaldo());

        c1.setTitular("Carlos Mora");
        System.out.println("Nuevo titular: " + c1.getTitular());
    }
}
