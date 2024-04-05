window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const liEle = document.querySelector(`#TableOfContents li a[href="${id}"]`);
      if (!liEle) {
        return;
      }
      const li = liEle.parentElement;
      if (entry.intersectionRatio > 0) {
        li.classList.add('active');
      } else {
        li.classList.remove('active');
      }
    });
  });
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
});