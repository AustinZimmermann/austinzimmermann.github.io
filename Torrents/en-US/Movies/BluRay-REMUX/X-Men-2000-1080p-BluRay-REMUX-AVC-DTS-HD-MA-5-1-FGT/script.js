document.addEventListener('DOMContentLoaded', () => {
  // Tab Switching
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

  // Magnet Link Copy & Toast
  const magnetBtn = document.getElementById('magnetBtn');
  const toast = document.getElementById('toast');

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  magnetBtn.addEventListener('click', () => {
    const magnetUri = magnetBtn.getAttribute('data-magnet');
    navigator.clipboard.writeText(magnetUri).then(() => {
      showToast('Magnet URI copied to clipboard!');
    }).catch(() => {
      showToast('Failed to copy magnet link.');
    });
  });

  // NFO Text Copy
  const copyNfoBtn = document.getElementById('copyNfoBtn');
  const nfoContent = document.getElementById('nfoContent');

  copyNfoBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(nfoContent.textContent).then(() => {
      showToast('MediaInfo log copied to clipboard!');
    }).catch(() => {
      showToast('Failed to copy NFO text.');
    });
  });

  // Bookmark Toggle
  const bookmarkBtn = document.getElementById('bookmarkBtn');
  bookmarkBtn.addEventListener('click', () => {
    const icon = bookmarkBtn.querySelector('i');
    if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
      bookmarkBtn.style.color = 'var(--accent)';
      showToast('Release saved to bookmarks!');
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
      bookmarkBtn.style.color = '';
      showToast('Removed from bookmarks.');
    }
  });
});
