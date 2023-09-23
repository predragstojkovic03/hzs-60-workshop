const scrollBtn = document.querySelector('.scroll-icon');
const coursesSection = document.querySelector('.courses');

scrollBtn.addEventListener('click', () => {
  console.log('asdasd');
  coursesSection.scrollIntoView({ behavior: 'smooth' });
});
