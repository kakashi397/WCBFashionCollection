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
menuItems = document.querySelectorAll('.p-slide-menu__item');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

// menuを開く
menuOpen.addEventListener('click', () => {
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
  
  // リンクをひとつずつ順に表示
  menuItems.forEach((menuItem, index) => {
    // console.log(`${index}番目のリスト`);
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 2400,
        delay: 300 * index,
        easing: 'ease',
        fill: 'forwards',
      },
    );
  });
});

// menuを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
});

/* fadein */
// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
    // console.log(entry.target);
    }
  });
};

// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);

// .fadeinを監視するよう指示
const fadeElements = document.querySelectorAll('.js-fadein');
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});