const contentFrame = document.getElementById('contentFrame');

tds.forEach(td => {
  td.addEventListener('click', () => {
    const videoSrc = td.dataset.video;
    const siteUrl = td.dataset.site;

    mainContent.classList.remove('visible');

    loadingVideo.src = videoSrc;
    loadingVideo.play();
    loadingScreen.classList.add('visible');

    loadingVideo.onended = () => {
      loadingScreen.classList.remove('visible');
      setTimeout(() => {
        contentFrame.src = siteUrl;
        mainContent.classList.add('visible');
      }, 500);
    };
  });
});