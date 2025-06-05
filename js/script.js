/* loadingから画面遷移 */
const loadingAreaGrey = document.querySelector('.js-loading-fadeout');
const loadingAreaGreen = document.querySelector('.js-loading-slideout');
const loadingText = document.querySelector('.js-loading-message-fadeout');


window.addEventListener('load', () => {
  // ローディング中（グレースクリーン）
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中（グリーンスクリーン）
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh']
    },
    {
      duration: 2000,
      delay: 800,
      eading: 'eaase',
      fill: 'forwards',
    }
  );

  // ローディング中（テキスト）
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: .8  //80%
      },
      {
        opacity: 0,
        offset: 1  //100%
      },
    ],
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});


/* gallery */
const mainImage = document.querySelector('.js-mainImage');
const thumbnails = document.querySelectorAll('.js-thumbnails');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({opacity: [0, 1]}, 500);
  });
});

/* slideMenu */
const menuOpen = document.querySelector('.js-menu-open');
const menuClose = document.querySelector('.js-menu-close');
const menuPanel = document.querySelector('.js-menu-panel');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

// menuを開く
menuOpen.addEventListener('click', () => {
  // console.log('メニューを開く');
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
});
// menuを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
});