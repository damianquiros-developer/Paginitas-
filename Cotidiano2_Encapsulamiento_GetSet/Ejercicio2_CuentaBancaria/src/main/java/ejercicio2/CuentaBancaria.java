package ejercicio2;

public class CuentaBancaria {

    private String titular;
    private double saldo;

    public void setTitular(String nuevoTitular) {
        titular = nuevoTitular;
    }

    public String getTitular() {
        return titular;
    }

    public void setSaldo(double nuevoSaldo) {
        if (nuevoSaldo >= 0) {
            saldo = nuevoSaldo;
        } else {
            System.out.println("No se permite un saldo negativo");
        }
    }

    public double getSaldo() {
        return saldo;
    }
}
