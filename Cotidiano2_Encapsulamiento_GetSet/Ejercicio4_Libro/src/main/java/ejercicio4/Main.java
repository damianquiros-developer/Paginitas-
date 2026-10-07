package ejercicio4;

public class Main {

    public static void main(String[] args) {
        Libro l1 = new Libro();
        l1.setTitulo("El Principito");
        l1.setAutor("Antoine de Saint-Exupery");
        l1.setPaginas(96);
        System.out.println("Titulo: " + l1.getTitulo());
        System.out.println("Autor: " + l1.getAutor());
        System.out.println("Paginas: " + l1.getPaginas());

        l1.setPaginas(0);
        System.out.println("Paginas: " + l1.getPaginas());
    }
}
