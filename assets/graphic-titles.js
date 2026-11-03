/**
 * Graphical abstract titles
 * Haase Lab Website
 *
 * Row heights are set by the shortened titles rendered in the HTML. Each card
 * then shows as much of the full title as fits in its caption box.
 */

(function() {
  'use strict';

  function fitTitles() {
    const captions = document.querySelectorAll('.graphic-card figcaption[data-full-title]');

    captions.forEach(function(caption) {
      const title = caption.querySelector('.graphic-title');
      if (!title.dataset.short) title.dataset.short = title.textContent;
      title.textContent = title.dataset.short;
      title.style.webkitLineClamp = '';
      title.style.lineClamp = '';
    });

    const lineCounts = Array.from(captions).map(function(caption) {
      const style = getComputedStyle(caption);
      const available = caption.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
      const lineHeight = parseFloat(getComputedStyle(caption.querySelector('.graphic-title')).lineHeight);
      return Math.max(1, Math.floor((available + 1) / lineHeight));
    });

    captions.forEach(function(caption, i) {
      const title = caption.querySelector('.graphic-title');
      title.textContent = caption.dataset.fullTitle;
      title.style.webkitLineClamp = lineCounts[i];
      title.style.lineClamp = lineCounts[i];
    });
  }

  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitTitles, 150);
  });

  if (document.readyState === 'complete') {
    fitTitles();
  } else {
    window.addEventListener('load', fitTitles);
  }
})();
