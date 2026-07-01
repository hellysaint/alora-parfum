(() => {
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

  // duplicate marquee content so the -50% translate loops seamlessly
  const marquee = document.getElementById('marqueeTrack');
  if (marquee) marquee.innerHTML += marquee.innerHTML;

  const motes = document.getElementById('motes');
  if (motes) {
    const count = 26;
    for (let i = 0; i < count; i++) {
      const m = document.createElement('span');
      m.className = 'mote';
      const size = 2 + Math.random() * 4;
      m.style.width = `${size}px`;
      m.style.height = `${size}px`;
      m.style.left = `${Math.random() * 100}%`;
      m.style.bottom = `${-8 - Math.random() * 20}%`;
      m.style.animationDuration = `${11 + Math.random() * 15}s`;
      m.style.animationDelay = `${Math.random() * 13}s`;
      motes.appendChild(m);
    }
  }

  const form = document.getElementById('waitlistForm');
  const success = document.getElementById('ctaSuccess');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      success.classList.add('show');
    });
  }
})();
