package ejercicio4;

public class Libro {

    private String titulo;
    private String autor;
    private int paginas;

    public void setTitulo(String nuevoTitulo) {
        titulo = nuevoTitulo;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setAutor(String nuevoAutor) {
        autor = nuevoAutor;
    }

    public String getAutor() {
        return autor;
    }

    public void setPaginas(int nuevasPaginas) {
        if (nuevasPaginas > 0) {
            paginas = nuevasPaginas;
        } else {
            System.out.println("El numero de paginas debe ser mayor a 0");
        }
    }

    public int getPaginas() {
        return paginas;
    }
}
