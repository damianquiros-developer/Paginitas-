package getset5;

public class Main {

    public static void main(String[] args) {
        Estudiante e1 = new Estudiante("Luis", "2025-01", 65);
        System.out.println("Nombre: " + e1.getNombre());
        System.out.println("Carnet: " + e1.getCarnet());
        System.out.println("Nota: " + e1.getNota());
        System.out.println("Estado: " + e1.estado());

        e1.setNota(85);
        System.out.println("Nota cambiada: " + e1.getNota());
        System.out.println("Estado: " + e1.estado());
    }
}
