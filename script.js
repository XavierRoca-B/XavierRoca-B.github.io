const hora = new Date().getHours();
const body = document.body;

if (hora >= 6 && hora < 12) {
  body.style.background = 'linear-gradient(to right, #a1c4fd, #c2e9fb)'; // Mañana
} else if (hora >= 12 && hora < 18) {
  body.style.background = 'linear-gradient(to right, #fbc2eb, #a6c1ee)'; // Tarde
} else {
  body.style.background = 'linear-gradient(to right, #2c3e50, #4ca1af)'; // Noche
  body.style.color = '#eee';
}
