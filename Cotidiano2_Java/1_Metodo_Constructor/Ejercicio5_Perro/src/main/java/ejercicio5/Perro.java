package ejercicio5;

public class Perro {

    String nombre;
    int edad;

    public Perro(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public int EdadHumana() {
        return edad * 7;
    }

    public boolean esCachorro() {
        if (edad < 2) {
            return true;
        } else {
            return false;
        }
    }

    public void mostrar_datos() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Edad humana: " + EdadHumana());
        if (esCachorro()) {
            System.out.println("Es cachorro: Si");
        } else {
            System.out.println("Es cachorro: No");
        }
    }
}
