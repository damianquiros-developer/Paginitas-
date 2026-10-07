package getset.ejercicio2;

public class CuentaBancaria {

    private String titular;
    private double saldo;

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public String getTitular() {
        return titular;
    }

    public void setSaldo(double saldo) {
        if (saldo >= 0) {
            this.saldo = saldo;
        } else {
            System.out.println("Error: el saldo no puede ser negativo. No se guardo el cambio.");
        }
    }

    public double getSaldo() {
        return saldo;
    }
}
