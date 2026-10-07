package getset.ejercicio3;

public class Auto {

    private String marca;
    private String modelo;
    private int velocidad;

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getMarca() {
        return marca;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getModelo() {
        return modelo;
    }

    public void setVelocidad(int velocidad) {
        if (velocidad < 0) {
            this.velocidad = 0;
        } else if (velocidad > 200) {
            this.velocidad = 200;
        } else {
            this.velocidad = velocidad;
        }
    }

    public int getVelocidad() {
        return velocidad;
    }
}
