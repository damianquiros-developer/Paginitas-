package getset3;

public class Main {

    public static void main(String[] args) {
        Auto a1 = new Auto("Toyota", "Corolla", 2020);
        System.out.println("Marca: " + a1.getMarca());
        System.out.println("Modelo: " + a1.getModelo());
        System.out.println("Anio: " + a1.getAnio());

        a1.setModelo("Yaris");
        a1.setAnio(2024);
        System.out.println("Datos cambiados:");
        System.out.println("Marca: " + a1.getMarca());
        System.out.println("Modelo: " + a1.getModelo());
        System.out.println("Anio: " + a1.getAnio());
    }
}
