document.addEventListener('DOMContentLoaded', () => {
  const dateElement = document.getElementById('date');
  dateElement.textContent = new Date().toDateString();
});
