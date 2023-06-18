const saludoElement = document.getElementById('saludo');
const saludos = ['Hi 👋', 'Hello 👋']; // Array con los saludos

let index = 0; // Índice para alternar entre los saludos

function escribirSaludo() {
  const saludo = saludos[index];
  let i = 0;

  function escribirCaracter() {
    if (i < saludo.length) {
      saludoElement.textContent = saludo.substring(0, i + 1);
      i++;
      setTimeout(escribirCaracter, 100); // Retraso entre caracteres (100 ms)
    } else {
      index = (index + 1) % saludos.length; // Alternar al siguiente saludo
      setTimeout(escribirSaludo, 1000); // Retraso antes de escribir el siguiente saludo (1000 ms)
    }
  }

  escribirCaracter();
}

escribirSaludo();