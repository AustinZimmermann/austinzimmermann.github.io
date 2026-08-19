document.addEventListener("DOMContentLoaded", () => {
  const hash = "9f8a3bc2e4d51a67890bcdef123456789abcdef0";
  const releaseName = "X2.2003.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1-FGT";
  const copyBtn = document.getElementById("copyHashBtn");
  const copyText = document.getElementById("copyHashText");
  const magnetBtn = document.getElementById("magnetLink");
  const downloadTorrentBtn = document.getElementById("downloadTorrent");

  // Copy Info Hash Handler
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(hash).then(() => {
      const originalText = copyText.textContent;
      copyText.textContent = "Copied!";
      setTimeout(() => {
        copyText.textContent = originalText;
      }, 2000);
    }).catch(err => {
      console.error("Clipboard copy failed: ", err);
    });
  });

  // Magnet Link Generator / Trigger
  magnetBtn.addEventListener("click", () => {
    const trackers = [
      "udp://tracker.opentrackr.org:1337/announce",
      "udp://open.stealth.si:80/announce",
      "udp://tracker.torrent.eu.org:451/announce"
    ].map(t => `&tr=${encodeURIComponent(t)}`).join("");

    const magnetUri = `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(releaseName)}${trackers}`;
    window.location.href = magnetUri;
  });

  // Torrent Download Placeholder
  downloadTorrentBtn.addEventListener("click", () => {
    alert(`Initiating download for "${releaseName}.torrent" metadata.`);
  });

  // Client-Side Comment Submission
  const submitCommentBtn = document.getElementById("submitComment");
  const commentTextArea = document.getElementById("commentText");
  const commentsList = document.getElementById("commentsList");

  submitCommentBtn.addEventListener("click", () => {
    const text = commentTextArea.value.trim();
    if (!text) return;

    const newComment = document.createElement("div");
    newComment.className = "comment";
    newComment.innerHTML = `
      <div class="comment-author">
        <strong>You</strong> <span class="comment-date">Just now</span>
      </div>
      <p>${escapeHtml(text)}</p>
    `;

    commentsList.prepend(newComment);
    commentTextArea.value = "";
  });

  // Simple HTML Escaper for comment safety
  function escapeHtml(string) {
    const div = document.createElement("div");
    div.textContent = string;
    return div.innerHTML;
  }
});
