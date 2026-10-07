package getset4;

public class Main {

    public static void main(String[] args) {
        Libro l1 = new Libro("Don Quijote", "Miguel de Cervantes", 863);
        System.out.println("Titulo: " + l1.getTitulo());
        System.out.println("Autor: " + l1.getAutor());
        System.out.println("Paginas: " + l1.getPaginas());

        l1.setTitulo("La Odisea");
        l1.setAutor("Homero");
        l1.setPaginas(541);
        System.out.println("Datos cambiados:");
        System.out.println("Titulo: " + l1.getTitulo());
        System.out.println("Autor: " + l1.getAutor());
        System.out.println("Paginas: " + l1.getPaginas());
    }
}
