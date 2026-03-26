// Scroll carousel
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let scrollAmount = 0;
const scrollStep = 260; // width per card + gap

prevBtn.addEventListener('click', () => {
  scrollAmount = Math.max(scrollAmount - scrollStep, 0);
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  scrollAmount = Math.min(scrollAmount + scrollStep, carousel.scrollWidth - carousel.clientWidth);
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});

// Modal open/close
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(contentKey) {
  modalContent.innerHTML = '';

  switch(contentKey) {
    case 'avatar':
      modalContent.innerHTML = `
        <h2 id="modal-title">Make Your Own Avatar</h2>
        <img src="assets/avatar-detail.png" alt="Detail of avatar editor" style="max-width:100%;border-radius:12px; box-shadow: 0 8px 25px rgb(122 63 255 / 0.5);" />
        <p>Customize your avatar by selecting face shapes, eyes, hair, and accessories with an interactive editor.</p>
      `;
      break;
    case 'videoAI':
      modalContent.innerHTML = `
        <h2 id="modal-title">Turn Your Story into Video with AI</h2>
        <video controls style="max-width:100%;border-radius:12px; box-shadow: 0 8px 25px rgb(122 63 255 / 0.5);">
          <source src="assets/story-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <p>Transform your personal stories into cinematic videos quickly with AI-powered technology.</p>
      `;
      break;
    case 'whispering':
      modalContent.innerHTML = `
        <h2 id="modal-title">Whispering</h2>
        <img src="assets/chat-detail.png" alt="Chat UI of Whispering feature" style="max-width:100%;border-radius:12px; box-shadow: 0 8px 25px rgb(122 63 255 / 0.5);" />
        <p>Engage in heartfelt conversations through our Whispering chat app - designed to share your feelings safely.</p>
      `;
      break;
    case 'shareStory':
      modalContent.innerHTML = `
        <h2 id="modal-title">Share Your Story</h2>
        <img src="assets/story-detail.png" alt="Visual storytelling of Share Your Story" style="max-width:100%;border-radius:12px; box-shadow: 0 8px 25px rgb(122 63 255 / 0.5);" />
        <p>Share your visual stories with our cinematic storytelling platform, and connect with others.</p>
      `;
      break;
    default:
      modalContent.innerHTML = '<p>Content not available.</p>';
  }

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  modalClose.focus();
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.querySelectorAll('.content-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-key');
    openModal(key);
  });
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const key = card.getAttribute('data-key');
      openModal(key);
    }
  });
});

document.getElementById('btnJoin').addEventListener('click', () => {
  window.location.href = 'signin.html'; // link ke sign in
});

document.getElementById('nav-contact').addEventListener('click', e => {
  e.preventDefault();
  window.location.href = 'contact.html'; // link ke contact us
});
document.getElementById('footerContactBtn').addEventListener('click', () => {
  window.location.href = 'contact.html';
});

window.location.href = "auth.html";