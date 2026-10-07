package ejercicio5;

public class Main {

    public static void main(String[] args) {
        Estudiante e1 = new Estudiante();
        e1.setNombre("Luis");
        e1.setNota1(80);
        e1.setNota2(90);
        System.out.println("Estudiante: " + e1.getNombre());
        System.out.println("Promedio: " + e1.calcularPromedio());
    }
}
