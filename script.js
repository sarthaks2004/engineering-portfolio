const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
  { threshold: 0.12 }
);

document.querySelectorAll('.timeline-entry, .about-content, .toolkit dl div').forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});
