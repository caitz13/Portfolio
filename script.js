'use strict';
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const hoverDevice = window.matchMedia('(hover: hover) and (pointer: fine)');
const previews = [...document.querySelectorAll('[data-preview]')];
previews.forEach(card => {
  const video = card.querySelector('video');
  const button = card.querySelector('.preview-toggle');
  const name = video.getAttribute('aria-label').replace(' video walkthrough', '');
  let generation = 0;
  let pinned = false;
  const label = playing => {
    button.textContent = playing ? 'Pause preview  Ⅱ' : 'Play preview  ▶';
    button.setAttribute('aria-pressed', String(playing));
    button.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${name} preview`);
  };
  const stop = () => {
    generation++;
    pinned = false;
    video.pause();
    card.classList.remove('is-playing');
    label(false);
  };
  const play = async () => {
    previews.forEach(other => { if (other !== card) other.dispatchEvent(new Event('stoppreview')); });
    const request = ++generation;
    video.muted = true;
    try {
      await video.play();
      if (request !== generation) return;
      card.classList.add('is-playing');
      label(true);
    } catch {
      if (request === generation) { card.classList.remove('is-playing'); label(false); }
    }
  };
  card.addEventListener('stoppreview', stop);
  card.addEventListener('pointerenter', () => {
    if (hoverDevice.matches && !reducedMotion.matches) play();
  });
  card.addEventListener('pointerleave', () => { if (!pinned) stop(); });
  button.addEventListener('click', () => {
    if (!video.paused) stop();
    else { pinned = true; play(); }
  });
  video.addEventListener('error', stop);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) stop();
    }).observe(card);
  }
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) previews.forEach(card => card.dispatchEvent(new Event('stoppreview')));
});
