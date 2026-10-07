package ejercicio3;

public class Auto {

    private String marca;
    private String modelo;
    private int velocidad;

    public void setMarca(String nuevaMarca) {
        marca = nuevaMarca;
    }

    public String getMarca() {
        return marca;
    }

    public void setModelo(String nuevoModelo) {
        modelo = nuevoModelo;
    }

    public String getModelo() {
        return modelo;
    }

    public void setVelocidad(int nuevaVelocidad) {
        if (nuevaVelocidad < 0) {
            velocidad = 0;
        } else if (nuevaVelocidad > 200) {
            velocidad = 200;
        } else {
            velocidad = nuevaVelocidad;
        }
    }

    public int getVelocidad() {
        return velocidad;
    }
}
