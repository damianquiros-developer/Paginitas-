package libro;

public class Libro {

    private String titulo;
    private String autor;
    private int paginas;

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getAutor() {
        return autor;
    }

    public void setPaginas(int paginas) {
        if (paginas > 0) {
            this.paginas = paginas;
        } else {
            System.out.println("Error: las paginas deben ser mayores a 0. No se guardo el valor.");
        }
    }

    public int getPaginas() {
        return paginas;
    }
}
