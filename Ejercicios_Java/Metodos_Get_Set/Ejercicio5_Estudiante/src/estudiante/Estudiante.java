package estudiante;

public class Estudiante {

    private String nombre;
    private double nota1;
    private double nota2;

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNota1(double nota1) {
        this.nota1 = nota1;
    }

    public double getNota1() {
        return nota1;
    }

    public void setNota2(double nota2) {
        this.nota2 = nota2;
    }

    public double getNota2() {
        return nota2;
    }

    public double calcularPromedio() {
        return (getNota1() + getNota2()) / 2;
    }
}
