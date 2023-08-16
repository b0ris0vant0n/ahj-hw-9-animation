const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(collapsible => {
  const btn = collapsible.querySelector('.collapsible-btn');
  const content = collapsible.querySelector('.collapsible-content');

  btn.addEventListener('click', () => {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

