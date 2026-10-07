package ejercicio5;

public class Estudiante {

    private String nombre;
    private double nota1;
    private double nota2;

    public void setNombre(String nuevoNombre) {
        nombre = nuevoNombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNota1(double nuevaNota1) {
        nota1 = nuevaNota1;
    }

    public double getNota1() {
        return nota1;
    }

    public void setNota2(double nuevaNota2) {
        nota2 = nuevaNota2;
    }

    public double getNota2() {
        return nota2;
    }

    public double calcularPromedio() {
        return (getNota1() + getNota2()) / 2;
    }
}
