package ejercicio6;

public class Auto {

    String marca;
    double velocidadMaxima;

    public Auto(String marca, double velocidadMaxima) {
        this.marca = marca;
        this.velocidadMaxima = velocidadMaxima;
    }

    public double tiempoPara100km() {
        return 100 / velocidadMaxima;
    }

    public double velocidadKmMinuto() {
        return velocidadMaxima / 60;
    }

    public void mostrar_datos() {
        System.out.println("Marca: " + marca);
        System.out.println("Velocidad maxima: " + velocidadMaxima + " km/h");
        System.out.println("Tiempo para 100 km: " + tiempoPara100km() + " horas");
        System.out.println("Velocidad por minuto: " + velocidadKmMinuto() + " km/min");
    }
}
