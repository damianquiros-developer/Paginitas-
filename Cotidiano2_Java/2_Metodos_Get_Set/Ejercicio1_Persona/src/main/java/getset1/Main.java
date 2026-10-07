package getset1;

public class Main {

    public static void main(String[] args) {
        Persona p1 = new Persona("Ana", 16);
        System.out.println("Nombre: " + p1.getNombre());
        System.out.println("Edad: " + p1.getEdad());

        p1.setNombre("Maria");
        p1.setEdad(17);
        System.out.println("Datos cambiados:");
        System.out.println("Nombre: " + p1.getNombre());
        System.out.println("Edad: " + p1.getEdad());
    }
}
