document.addEventListener("DOMContentLoaded", () => {
  // Tab Switching Logic
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      tabButtons.forEach((b) => b.classList.remove("active"));
      tabPanes.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPane = document.getElementById(`tab-${targetTab}`);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });
  });

  // Copy Hash / Toast Notification
  const copyBtn = document.getElementById("btn-copy-hash");
  const toast = document.getElementById("toast");

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2400);
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const hash = copyBtn.getAttribute("data-hash");
      navigator.clipboard
        .writeText(hash)
        .then(() => {
          showToast("Info Hash copied to clipboard!");
        })
        .catch(() => {
          showToast("Failed to copy hash");
        });
    });
  }

  // Magnet Link Action
  const magnetBtn = document.getElementById("btn-magnet");
  if (magnetBtn) {
    magnetBtn.addEventListener("click", () => {
      const magnetURI =
        "magnet:?xt=urn:btih:c4e8f192b001a4e58b1990c76dbb912a7f5024e1&dn=X-Men.The.Last.Stand.2006.1080p.BluRay.REMUX.AVC.DTS-HD.MA.6.1-FGT&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce";
      window.location.href = magnetURI;
      showToast("Triggered magnet protocol in default client");
    });
  }

  // Download .torrent simulation
  const downloadBtn = document.getElementById("btn-download");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      showToast("Starting .torrent file download...");
    });
  }
});
