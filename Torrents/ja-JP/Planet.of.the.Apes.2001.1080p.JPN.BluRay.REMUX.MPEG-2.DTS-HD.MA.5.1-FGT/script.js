document.addEventListener('DOMContentLoaded', () => {
    const torrentBtn = document.getElementById('download-torrent');
    const magnetBtn = document.getElementById('magnet-link');

    torrentBtn.addEventListener('click', () => {
        alert('トレントファイルのダウンロードを開始します... (Mock Action)');
    });

    magnetBtn.addEventListener('click', () => {
        alert('マグネットリンクをクリップボードにコピーしました、または外部アプリを起動します... (Mock Action)');
    });
});