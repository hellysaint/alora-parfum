(() => {
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

  const boxScene = document.getElementById('boxScene');
  if (boxScene) {
    const boxIo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) boxScene.classList.add('is-open');
      });
    }, { threshold: 0.45 });
    boxIo.observe(boxScene);
  }

  const vialRow = document.getElementById('vialRow');
  if (vialRow) {
    const vials = [
      { x: 120, y: 190, c: '#E7CBB2' },
      { x: 150, y: 205, c: '#D9AE96' },
      { x: 180, y: 220, c: '#C9A480' },
      { x: 210, y: 225, c: '#E3C0AE' },
      { x: 240, y: 210, c: '#B08B63' },
      { x: 270, y: 195, c: '#D8C3A5' },
    ];
    const ns = 'http://www.w3.org/2000/svg';
    vials.forEach((v) => {
      const body = document.createElementNS(ns, 'rect');
      body.setAttribute('x', v.x - 5);
      body.setAttribute('y', v.y - 34);
      body.setAttribute('width', 10);
      body.setAttribute('height', 34);
      body.setAttribute('rx', 2);
      body.setAttribute('fill', v.c);
      body.setAttribute('stroke', 'rgba(0,0,0,.25)');
      body.setAttribute('stroke-width', '.5');
      const cap = document.createElementNS(ns, 'rect');
      cap.setAttribute('x', v.x - 3);
      cap.setAttribute('y', v.y - 42);
      cap.setAttribute('width', 6);
      cap.setAttribute('height', 8);
      cap.setAttribute('rx', 1.5);
      cap.setAttribute('fill', '#1a1613');
      vialRow.appendChild(body);
      vialRow.appendChild(cap);
    });
  }

  const motes = document.getElementById('motes');
  if (motes) {
    const count = 22;
    for (let i = 0; i < count; i++) {
      const m = document.createElement('span');
      m.className = 'mote';
      const size = 3 + Math.random() * 5;
      m.style.width = `${size}px`;
      m.style.height = `${size}px`;
      m.style.left = `${Math.random() * 100}%`;
      m.style.bottom = `${-10 - Math.random() * 20}%`;
      m.style.animationDuration = `${10 + Math.random() * 14}s`;
      m.style.animationDelay = `${Math.random() * 12}s`;
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
