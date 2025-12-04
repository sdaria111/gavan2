// Простая обработка формы (без отправки на сервер)
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formStatus').textContent = 'Спасибо! Ваше сообщение получено.';
  document.getElementById('contactForm').reset();
});

// Дополнительно: выделение активной ссылки в меню
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.style.textDecoration = 'underline';
    link.style.color = '#ffd180';
  }
});