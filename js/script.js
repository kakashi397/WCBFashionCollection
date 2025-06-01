/* loadingから画面遷移 */
const loadingAreaGrey = document.querySelector('.js-loading');

window.addEventListener('load', () => {
  // loadingが終わった時の処理
  loadingAreaGrey.animete(動かす内容, 動きの詳細);
});