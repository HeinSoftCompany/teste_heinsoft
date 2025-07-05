// 4) Toggle FAQ
document.querySelectorAll('.faq-button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');
    content.classList.toggle('d-none');
    icon.classList.toggle('ri-add-line');
    icon.classList.toggle('ri-subtract-line');
  });
});

// 5) Pricing toggle (se existir)
const mBtn = document.getElementById('monthly-btn');
const aBtn = document.getElementById('annual-btn');
if (mBtn && aBtn) {
  mBtn.addEventListener('click', () => {
    mBtn.classList.add('btn-primary', 'text-white');
    aBtn.classList.remove('btn-primary', 'text-white');
  });
  aBtn.addEventListener('click', () => {
    aBtn.classList.add('btn-primary', 'text-white');
    mBtn.classList.remove('btn-primary', 'text-white');
  });
}
