package ejercicio3;

public class Main {

    public static void main(String[] args) {
        Auto a1 = new Auto();
        a1.setMarca("Toyota");
        a1.setModelo("Corolla");
        a1.setVelocidad(150);
        System.out.println("Marca: " + a1.getMarca());
        System.out.println("Modelo: " + a1.getModelo());
        System.out.println("Velocidad: " + a1.getVelocidad());

        a1.setVelocidad(250);
        System.out.println("Velocidad con 250: " + a1.getVelocidad());

        a1.setVelocidad(-20);
        System.out.println("Velocidad con -20: " + a1.getVelocidad());
    }
}
