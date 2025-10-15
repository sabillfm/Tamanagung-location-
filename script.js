const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');
const closePopup = document.getElementById('closePopup');
const navLinks = document.querySelectorAll('.nav-link');

loginBtn.addEventListener('click', () => {
  loginPopup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  loginPopup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === loginPopup) loginPopup.style.display = 'none';
});

// Efek klik di menu
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
