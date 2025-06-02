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