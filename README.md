# Temas Raros

Generador infinito de temas raros e interesantes para investigar y conversar.

El presentador es un tablero tipo pantalla de aeropuerto (*split-flap*): cada letra
hace un solo *flip* para revelar el nuevo carácter — no gira como una ruleta, solo cambia.

## Cómo funciona

- Un botón **Generar tema** dispara un tema nuevo.
- Los temas salen de un banco curado de curiosidades reales y, para variedad
  prácticamente infinita, también de un generador combinatorio por plantillas
  (lugares + fenómenos + preguntas) que nunca se repite igual dos veces seguidas.
- El tablero recalcula sus columnas según el ancho de pantalla, así que es responsive.

## Uso local

Solo abre `index.html` en el navegador, o sirve la carpeta con cualquier servidor
estático:

```bash
python3 -m http.server 8080
```

## Stack

HTML, CSS y JavaScript puro. Sin dependencias ni build step.
