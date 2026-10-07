package ejercicio4;

public class Main {

    public static void main(String[] args) {
        Libro libro1 = new Libro("Cien anios de soledad", "Gabriel Garcia Marquez", 1967);
        Libro libro2 = new Libro("El Principito", "Antoine de Saint-Exupery");

        libro1.mostrar_informacion();
        libro2.mostrar_informacion();
    }
}
