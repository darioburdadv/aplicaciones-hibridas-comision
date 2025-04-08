// index.js
import dotenv from 'dotenv';
dotenv.config();

import('node:module').then(async () => {
  const esPrimo = (await import('./primo.cjs')).default || (await import('./primo.cjs'));
  
  const numero = parseInt(process.env.NUMERO, 10);
  console.log(`¿El número ${numero} es primo? ${esPrimo(numero) ? 'Sí' : 'No'}`);
});
