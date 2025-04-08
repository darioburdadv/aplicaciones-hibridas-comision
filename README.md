# Ejercicio 1

Este proyecto verifica si un número es primo utilizando una función exportada con CommonJS e importada con ES Modules.
Además, el número a verificar se obtiene desde una variable de entorno usando un archivo `.env`.

## Características

- Uso mixto de **CommonJS** para exportar funciones y **ES Modules** para importarlas.
- Uso de **variables de entorno** con el paquete `dotenv`.

## Estructura

```
Ejercicio 1/
├── index.js         # Archivo principal con import ES Modules
├── primo.cjs        # Lógica de número primo con CommonJS
├── .env             # Archivo con la variable NUMERO
├── package.json     # Configuración del proyecto Node.js
└── README.md        # Este archivo
```

## Cómo usar

1. Clona el repositorio:

```bash
git clone https://github.com/darioburdadv/aplicaciones-hibridas-comision.git
cd aplicaciones-hibridas-comision
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` y define un número:

```env
NUMERO=22
```

4. Ejecuta el proyecto:

```bash
npm start
```

Y verás un mensaje en consola indicando si el número es primo o no.

## Ejemplo

```
¿El número 22 es primo? Sí
```

## Créditos

Proyecto para la comisión de **Aplicaciones Híbridas**.
